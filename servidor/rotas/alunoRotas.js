// servidor/rotas/alunoRotas.js
const express = require("express");
const {
  criarAluno,
  listarAlunos,
  visualizarAluno,
  editarAluno,
  deletarAluno,
} = require("../modelos/Aluno");
const router = express.Router();

// Rota para criar um aluno
router.post("/alunos", async (req, res) => {
  const alunoData = req.body;
  try {
    const novoAluno = await criarAluno(alunoData);
    res.status(201).json(novoAluno);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar aluno" });
  }
});

// Rota para listar todos os alunos
router.get("/alunos", async (req, res) => {
  try {
    const alunos = await listarAlunos();
    res.json(alunos);
  } catch (err) {
    res.status(500).json({ message: "Erro ao listar alunos" });
  }
});

// Rota para visualizar um aluno por ID
router.get("/alunos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const aluno = await visualizarAluno(id);
    if (aluno) {
      res.json(aluno);
    } else {
      res.status(404).json({ message: "Aluno não encontrado" });
    }
  } catch (err) {
    res.status(500).json({ message: "Erro ao visualizar aluno" });
  }
});

// Rota para editar um aluno por ID
router.put("/alunos/:id", async (req, res) => {
  const { id } = req.params;
  const alunoData = req.body;
  try {
    const alunoAtualizado = await editarAluno(id, alunoData);
    if (alunoAtualizado) {
      res.json(alunoAtualizado);
    } else {
      res.status(404).json({ message: "Aluno não encontrado" });
    }
  } catch (err) {
    res.status(500).json({ message: "Erro ao editar aluno" });
  }
});

// Rota para deletar um aluno por ID
router.delete("/alunos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const alunoDeletado = await deletarAluno(id);
    if (alunoDeletado) {
      res.json({ message: "Aluno deletado com sucesso", aluno: alunoDeletado });
    } else {
      res.status(404).json({ message: "Aluno não encontrado" });
    }
  } catch (err) {
    res.status(500).json({ message: "Erro ao deletar aluno" });
  }
});

module.exports = router;
