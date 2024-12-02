import React, { useState } from "react";

const CustomTollbar = ({ label, onView, onNavigate, views }) => {
  const [itemText, setItemText] = useState("Mês"); // Inicializado como "Mês" (em português)

  // Traduções para as visualizações
  const translatedViews = {
    month: "Mês",
    week: "Semana",
    day: "Dia",
  };

  // Função para traduzir o nome da visualização
  const translateView = (view) => translatedViews[view] || view;

  return (
    <div className="toolbar-container">
      <h1 className="mesAno">{label}</h1>

      <div className="dirtop">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {itemText} {/* Exibe o nome da visualização atual */}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {views.map((view, index) => (
              <div key={index}>
                {" "}
                {/* Corrigido o erro de key */}
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      onView(view);
                      setItemText(translateView(view)); // Atualiza o texto da visualização
                    }}
                  >
                    {translateView(view)}{" "}
                    {/* Exibe o nome traduzido da visualização */}
                  </button>
                </li>
                {index === 2 && <hr className="dropdown-divider" />}
              </div>
            ))}
          </ul>
        </div>

        <div className="toolbar-navegation" style={{ marginLeft: "15px" }}>
          <button
            className="btn btn-secondary btn-ls mr-2 border-0"
            onClick={() => onNavigate("TODAY")}
          >
            Hoje
          </button>
          <button
            className="btn btn-sm mr-2 text-secondary"
            onClick={() => onNavigate("PREV")}
            style={{ marginLeft: "15px" }}
          >
            <i className="bi bi-caret-left"></i>{" "}
            {/* Ícone de seta para a esquerda */}
          </button>
          <button
            className="btn btn-sm mr-2 text-secondary"
            onClick={() => onNavigate("NEXT")}
          >
            <i className="bi bi-caret-right"></i>{" "}
            {/* Ícone de seta para a direita */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomTollbar;
