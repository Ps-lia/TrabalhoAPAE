import React, { useState } from "react";
import "./InicioPage.css"; // Importação do CSS exclusivo

function InicioPage() {
  const [menuVisivel, setMenuVisivel] = useState(false);
  const [modalVisivel, setModalVisivel] = useState(false);

  const alternarMenu = () => {
    setMenuVisivel((prev) => !prev); // Alterna a visibilidade do menu
  };

  const abrirModalLogout = () => {
    setModalVisivel(true);
  };

  const confirmarLogout = () => {
    window.location.href = "/"; // Redireciona para a página de login
  };

  const cancelarLogout = () => {
    setModalVisivel(false);
  };

  return (
    <div className="inicio-app">
      <header className="inicio-header">
        <button
          className="inicio-toggle-btn"
          onClick={alternarMenu}
          aria-label="Alternar menu"
        >
          <div className="inicio-hamburger">
            <span className="inicio-line"></span>
            <span className="inicio-line"></span>
            <span className="inicio-line"></span>
          </div>
        </button>
        <button className="inicio-logout-btn" onClick={abrirModalLogout}>
          Sair
        </button>
      </header>

      {/* Alterando a forma de renderizar o menu */}
      <nav className={`inicio-menu ${menuVisivel ? "show" : ""}`}>
        <ul>
          <li onClick={() => (window.location.href = "/calendario")}>
            Calendário
          </li>
          <li onClick={() => (window.location.href = "/cadastro")}>
            Novo Cadastro
          </li>
        </ul>
      </nav>

      {modalVisivel && (
        <div className="inicio-modal">
          <div className="inicio-modal-content">
            <h2>Você realmente deseja sair?</h2>
            <button onClick={confirmarLogout}>Sim</button>
            <button onClick={cancelarLogout}>Não</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InicioPage;
