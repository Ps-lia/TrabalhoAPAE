import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Importação do CSS exclusivo

const PaginaLogin = () => {
  const [loginUsuario, setLoginUsuario] = useState("");
  const [loginSenha, setLoginSenha] = useState("");
  const [loginErro, setLoginErro] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = "login-page-body"; // Adiciona a classe exclusiva ao body
    return () => {
      document.body.className = ""; // Remove a classe ao desmontar
    };
  }, []);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario_sec: loginUsuario,
          senha_sec: loginSenha,
        }),
      });

      const data = await response.json();
      console.log("Resposta da API:", data);

      if (response.ok) {
        navigate("/inicio");
      } else {
        setLoginErro(data.message || "Erro no login");
      }
    } catch (err) {
      console.error("Erro de conexão:", err);
      setLoginErro("Erro ao tentar fazer login");
    }
  };

  return (
    <section className="login-container">
      <section className="login-right-panel">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="login-input-container">
            <span className="login-icon">
              <i className="fas fa-user"></i>
            </span>
            <input
              type="text"
              placeholder="Usuário"
              value={loginUsuario}
              onChange={(e) => setLoginUsuario(e.target.value)}
              required
              aria-label="Usuário"
            />
          </div>
          <div className="login-input-container">
            <span className="login-icon">
              <i className="fas fa-lock"></i>
            </span>
            <input
              type="password"
              placeholder="Senha"
              value={loginSenha}
              onChange={(e) => setLoginSenha(e.target.value)}
              required
              aria-label="Senha"
            />
          </div>
          <button
            type="submit"
            className="login-submit-btn"
            aria-label="Entrar"
          >
            Entrar
          </button>
        </form>
        {loginErro && <div className="login-error-message">{loginErro}</div>}
      </section>
    </section>
  );
};

export default PaginaLogin;
