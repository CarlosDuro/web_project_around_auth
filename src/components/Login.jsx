import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header/Header";
import auth from "../utils/auth";
import "../blocks/Login.css";

function Login({ setLoggedIn, setCurrentUser }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    auth
      .authorize(formData.email, formData.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);

          return auth.checkToken(data.token);
        }
        return Promise.reject("No se recibió el token");
      })
      .then((userData) => {
        setCurrentUser(userData.data);
        navigate("/"); // ✅ funciona con HashRouter
      })
      .catch(() => {
        setError("Correo o contraseña incorrectos");
      });
  };

  return (
    <>
      <Header />
      <div className="auth">
        <h2 className="auth__title">Inicia sesión</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="auth__input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="auth__input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {error && <div className="auth__error">{error}</div>}
          <button type="submit" className="auth__button">
            Inicia sesión
          </button>
        </form>
        <div className="auth__footer">
          ¿Aún no eres miembro?{" "}
          <Link to="/signup" className="auth__link">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
