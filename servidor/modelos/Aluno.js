// servidor/modelos/Aluno.js
const pool = require("../configuracoes/bancoDados"); // Importando a configuração do banco de dados

// Função para criar um novo aluno
const criarAluno = async (alunoData) => {
  const {
    nome,
    cpf,
    logradouro,
    numero,
    bairro,
    cidade,
    uf,
    cep,
    nascimento,
    telefone,
    nome_responsavel,
    cpf_responsavel,
    telefone_responsavel,
    email_responsavel,
  } = alunoData;

  try {
    const result = await pool.query(
      `
      INSERT INTO alunos (nome, cpf, logradouro, numero, bairro, cidade, uf, cep, nascimento, telefone, nome_responsavel, cpf_responsavel, telefone_responsavel, email_responsavel)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *;
    `,
      [
        nome,
        cpf,
        logradouro,
        numero,
        bairro,
        cidade,
        uf,
        cep,
        nascimento,
        telefone,
        nome_responsavel,
        cpf_responsavel,
        telefone_responsavel,
        email_responsavel,
      ]
    );
    return result.rows[0]; // Retorna o aluno inserido
  } catch (err) {
    console.error("Erro ao criar aluno:", err);
    throw err;
  }
};

// Função para listar todos os alunos
const listarAlunos = async () => {
  try {
    const result = await pool.query("SELECT * FROM alunos");
    return result.rows; // Retorna todos os alunos
  } catch (err) {
    console.error("Erro ao listar alunos:", err);
    throw err;
  }
};

// Função para visualizar um aluno pelo ID
const visualizarAluno = async (id) => {
  try {
    const result = await pool.query("SELECT * FROM alunos WHERE id = $1", [id]);
    return result.rows[0]; // Retorna o aluno encontrado
  } catch (err) {
    console.error("Erro ao visualizar aluno:", err);
    throw err;
  }
};

// Função para editar um aluno
const editarAluno = async (id, alunoData) => {
  const {
    nome,
    cpf,
    logradouro,
    numero,
    bairro,
    cidade,
    uf,
    cep,
    nascimento,
    telefone,
    nome_responsavel,
    cpf_responsavel,
    telefone_responsavel,
    email_responsavel,
  } = alunoData;

  try {
    const result = await pool.query(
      `
      UPDATE alunos SET 
        nome = $1,
        cpf = $2,
        logradouro = $3,
        numero = $4,
        bairro = $5,
        cidade = $6,
        uf = $7,
        cep = $8,
        nascimento = $9,
        telefone = $10,
        nome_responsavel = $11,
        cpf_responsavel = $12,
        telefone_responsavel = $13,
        email_responsavel = $14
      WHERE id = $15
      RETURNING *;
    `,
      [
        nome,
        cpf,
        logradouro,
        numero,
        bairro,
        cidade,
        uf,
        cep,
        nascimento,
        telefone,
        nome_responsavel,
        cpf_responsavel,
        telefone_responsavel,
        email_responsavel,
        id,
      ]
    );

    return result.rows[0]; // Retorna o aluno atualizado
  } catch (err) {
    console.error("Erro ao editar aluno:", err);
    throw err;
  }
};

// Função para deletar um aluno
const deletarAluno = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM alunos WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0]; // Retorna o aluno deletado
  } catch (err) {
    console.error("Erro ao deletar aluno:", err);
    throw err;
  }
};

module.exports = {
  criarAluno,
  listarAlunos,
  visualizarAluno,
  editarAluno,
  deletarAluno,
};
