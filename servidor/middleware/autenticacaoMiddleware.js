const cors = require("cors");

// Permite requisições de qualquer origem
app.use(cors());

// Middleware para rotas inexistentes
app.use((req, res, next) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

// Middleware para tratar erros gerais
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Ocorreu um erro no servidor" });
});
