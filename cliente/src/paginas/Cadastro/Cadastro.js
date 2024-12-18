import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Aluno from "./componentsCadastro/aluno/aluno";
import Profissional from "./componentsCadastro/profissional/profissional";
import Especialidade from "./componentsCadastro/especialidade/especialidade";
import "./componentsCadastro/Components-Cadastro-css.css";

function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    codigo: "",
    nome: "",
    cpf: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    numero: "",
    cep: "",
    uf: "",
    nascimento: "",
    telefone: "",
    telefoneResponsavel: "",
    email: "",
    responsavel: "",
  });

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const renderFormContent = () => {
    switch (selectedOption) {
      case "Aluno":
        return <Aluno formData={formData} handleChange={handleChange} />;
      case "Profissional":
        return <Profissional formData={formData} handleChange={handleChange} />;
      case "Especialidade":
        return (
          <Especialidade formData={formData} handleChange={handleChange} />
        );
      default:
        return <p>Selecione uma opção para começar o cadastro.</p>;
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Cadastro</h2>

      <DropdownButton
        id="dropdown-basic-button"
        title={selectedOption || "Selecione uma opção"}
        onSelect={handleSelectOption}
        className="mb-4"
      >
        <Dropdown.Item eventKey="Aluno">Aluno</Dropdown.Item>
        <Dropdown.Item eventKey="Profissional">Profissional</Dropdown.Item>
        <Dropdown.Item eventKey="Especialidade">Especialidade</Dropdown.Item>
      </DropdownButton>

      <form>
        {renderFormContent()}

        <div className="mt-4">
          <button type="submit" className="btn btn-primary me-2">
            Salvar
          </button>
          <button type="button" className="btn btn-warning me-2">
            Alterar
          </button>
          <button type="button" className="btn btn-danger me-2">
            Excluir
          </button>
          <button type="button" className="btn btn-secondary me-2">
            Limpar
          </button>
          <button type="button" className="btn btn-info" onClick={() => navigate("/calendario")}
          >
            Voltar ao Calendário
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
