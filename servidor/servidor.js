// servidor/servidor.js
const app = require("./app"); // Importa o arquivo do servidor Express
const { pool } = require("./configuracoes/bancoDados"); // Importa o pool de conexões

// Testar a conexão com o banco de dados
pool.connect((err, client, done) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.stack);
  } else {
    console.log("Conectado ao banco de dados com sucesso!");

    // Se a conexão for bem-sucedida, inicia o servidor
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  }
});
