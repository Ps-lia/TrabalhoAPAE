// servidor/app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const autenticacaoRotas = require("./controladores/autenticacaoControlador"); // Importando o controlador de autenticação
const alunoRotas = require("./rotas/alunoRotas");

const app = express();

// Configuração do CORS
app.use(cors({
  origin: 'http://localhost:3000',  // Permitir apenas requisições do frontend local
  methods: 'GET,POST,PUT,DELETE',  // Permitir esses métodos
  allowedHeaders: 'Content-Type,Authorization', // Permitir esses headers
}));

// Configuração do body-parser para processar JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use("/api", autenticacaoRotas); // Rota de autenticação
app.use("/api", alunoRotas);// Rota de alunos com namespace mais claro

// Middleware para rotas inexistentes
app.use((req, res, next) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Middleware para tratar erros gerais
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Ocorreu um erro no servidor" });
});

module.exports = app;