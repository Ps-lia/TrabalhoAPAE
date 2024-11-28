import React, { useState } from "react";
import "./Inicio.css"; // Importação do CSS

function Menu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleLogout = () => {
    setIsModalVisible(true);
  };

  const confirmLogout = () => {
    window.location.href = "/"; // Redireciona para a página de login
  };

  const cancelLogout = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="app">
      <header>
        <button
          className="toggle-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </header>

      {isMenuVisible && (
        <nav className="menu">
          <ul>
            <li onClick={() => (window.location.href = "calendario")}>Calendário</li>
            <li onClick={() => (window.location.href = "cadastro")}>Cadastro</li>
          </ul>
        </nav>
      )}

      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Você realmente deseja sair?</h2>
            <button onClick={confirmLogout}>Sim</button>
            <button onClick={cancelLogout}>Não</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
