import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./paginas/Login/Login"; // Página de Login
import Inicio from "./paginas/Inicio/Inicio"; // Página Inicial
import Calendario from "./paginas/Agenda/Calendario";
import Cadastro from "./paginas/Cadastro/Cadastro";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />{" "}
        <Route path="/inicio" element={<Inicio />} />{" "}
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
