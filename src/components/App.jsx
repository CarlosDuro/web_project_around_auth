import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Register from "./Register";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import api from "../utils/api";
import auth from "../utils/auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Validar token cuando App carga
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((userData) => {
          setLoggedIn(true);
          setCurrentUser(userData.data); // ✅ <- usamos userData.data
          if (
            location.pathname === "/login" ||
            location.pathname === "/signup"
          ) {
            navigate("/");
          }
        })
        .catch((err) => {
          console.error("Token inválido:", err);
          setLoggedIn(false);
          setCurrentUser(null);
          if (
            location.pathname !== "/login" &&
            location.pathname !== "/signup"
          ) {
            navigate("/login");
          }
        });
    } else {
      if (location.pathname !== "/login" && location.pathname !== "/signup") {
        setLoggedIn(false);
        setCurrentUser(null);
        navigate("/login");
      }
    }
  }, [navigate, location.pathname]);

  // ✅ Cargar data si el usuario ya está logueado
  useEffect(() => {
    if (!loggedIn) return;

    setIsLoading(true);
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        // 🛠️ Fusionamos el email si ya estaba en currentUser
        setCurrentUser((prevUser) => ({
          ...userData,
          email: prevUser?.email || "", // Mantenemos el email anterior
        }));
        setCards(cardsData);
      })
      .catch((err) => console.error("Error al obtener los datos:", err))
      .finally(() => setIsLoading(false));
  }, [loggedIn]);

  const handleUpdateUser = (data) => {
    api
      .updateUserInfo(data)
      .then(setCurrentUser)
      .catch((error) =>
        console.error("Error al actualizar el usuario:", error)
      );
  };

  const handleUpdateAvatar = (data) => {
    api
      .updateAvatar(data)
      .then(setCurrentUser)
      .catch((error) => console.error("Error al actualizar el avatar:", error));
  };

  const handleAddPlaceSubmit = (cardData) => {
    setIsLoading(true);
    return api
      .addCard(cardData)
      .then((newCard) => setCards((prev) => [newCard, ...prev]))
      .catch((error) => console.error("Error al agregar la tarjeta:", error))
      .finally(() => setIsLoading(false));
  };

  const handleCardDelete = (card) => {
    setIsLoading(true);
    api
      .deleteCard(card._id)
      .then(() => setCards((prev) => prev.filter((c) => c._id !== card._id)))
      .catch((error) => console.error("Error al eliminar la tarjeta:", error))
      .finally(() => setIsLoading(false));
  };

  const handleCardLike = (card) => {
    api
      .changeLikeCardStatus(card._id, !card.isLiked)
      .then((newCard) => {
        setCards((prev) =>
          prev.map((c) =>
            c._id === card._id ? { ...c, isLiked: newCard.isLiked } : c
          )
        );
      })
      .catch((error) => console.error("Error al actualizar el like:", error));
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        handleUpdateUser,
        handleUpdateAvatar,
      }}
    >
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Header
                    onLogout={handleLogout}
                    isLoggedIn={loggedIn}
                    currentUser={currentUser}
                  />
                  <Main
                    cards={cards}
                    onAddPlaceSubmit={handleAddPlaceSubmit}
                    onCardDelete={handleCardDelete}
                    onCardLike={handleCardLike}
                    isLoading={isLoading}
                  />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setLoggedIn={setLoggedIn}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
