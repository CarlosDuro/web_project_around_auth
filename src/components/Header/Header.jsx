import { Link, useLocation } from "react-router-dom";
import "../../blocks/header.css";

function Header({ onLogout, isLoggedIn, currentUser }) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__logo">
          Around
          <span className="header__logo-badge">The U.S.</span>
        </h1>
      </div>

      <div className="header__right">
        {/* ✅ Email a la derecha */}
        {isLoggedIn && currentUser && (
          <p className="header__email">{currentUser.email}</p>
        )}

        {isLoggedIn ? (
          <button className="header__logout" onClick={onLogout}>
            Cerrar sesión
          </button>
        ) : location.pathname === "/login" ? (
          <Link to="/signup" className="header__link">
            Regístrate
          </Link>
        ) : location.pathname === "/signup" ? (
          <Link to="/login" className="header__link">
            Inicia sesión
          </Link>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
