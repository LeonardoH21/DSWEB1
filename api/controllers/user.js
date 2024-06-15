// Este código define as operações CRUD para os usuários na base de dados, incluindo
// funções para obter, adicionar, atualizar e deletar usuários, além de uma função para
// buscar usuários com base em critérios específicos.

import { db } from "../db.js";

// Função para obter todos os usuários da tabela 'usuarios'
export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Função para adicionar um novo usuário à tabela 'usuarios'
export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`nome`, `cpf`, `fone`, `combo`, `horario`, `data_agendamento`) VALUES(?, ?, ?, ?, ?, ?)";

  const values = [
    req.body.nome,
    req.body.cpf,
    req.body.fone,
    req.body.combo,
    req.body.horario,
    req.body.data_agendamento,
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

// Função para atualizar um usuário existente na tabela 'usuarios'
export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `cpf` = ?, `fone` = ?, `combo` = ?, `horario` = ?, `data_agendamento` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.cpf,
    req.body.fone,
    req.body.combo,
    req.body.horario,
    req.body.data_agendamento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

// Função para deletar um usuário da tabela 'usuarios'
export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};

// Função para buscar usuários com base em critérios específicos (combo e data_agendamento)
export const searchUsers = (req, res) => {
  const { combo, data_agendamento } = req.query;
  let q = "SELECT * FROM usuarios WHERE 1=1";
  const values = [];

  if (combo) {
    q += " AND combo = ?";
    values.push(combo);
  }

  if (data_agendamento) {
    q += " AND data_agendamento = ?";
    values.push(data_agendamento);
  }

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
