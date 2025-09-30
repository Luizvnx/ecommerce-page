import React from "react";
import "../styles/LoginModal.css";
import { useAuth } from "../hooks/useAuth";

export default function LoginModal({ isOpen, onClose }) {
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleLogin = () => {
    login();
    onClose();
    alert("Login realizado com sucesso!");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Login</h2>
        <input placeholder="Usuário" className="modal-input" />
        <input placeholder="Senha" type="password" className="modal-input" />
        <button className="modal-btn" onClick={handleLogin}>
          Entrar
        </button>
        <button className="modal-btn cancel" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
