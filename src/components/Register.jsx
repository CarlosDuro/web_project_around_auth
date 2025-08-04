import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import InfoTooltip from "./InfoTooltip";
import "../blocks/register.css"; // Reutiliza los estilos de Login
import "../blocks/InfoTooltip.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de validación
    if (email && password.length >= 6) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
    setIsTooltipOpen(true);
  };

  const handleCloseTooltip = () => {
    setIsTooltipOpen(false);
    if (isSuccess) {
      navigate("/web_project_around_auth/login");
    }
  };

  return (
    <>
      <Header />
      <div className="auth">
        <h2 className="auth__title">Regístrate</h2>
        <form className="auth__form" onSubmit={handleSubmit}>
          <input
            className="auth__input"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="auth__input"
            type="password"
            placeholder="Contraseña (mínimo 6 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="auth__button" type="submit">
            Regístrate
          </button>
        </form>
        <div className="auth__footer">
          ¿Ya eres miembro?
          <a href="/web_project_around_auth/login" className="auth__link">
            Inicia sesión aquí
          </a>
        </div>
      </div>

      <InfoTooltip
        isOpen={isTooltipOpen}
        onClose={handleCloseTooltip}
        isSuccess={isSuccess}
      />
    </>
  );
}

export default Register;
