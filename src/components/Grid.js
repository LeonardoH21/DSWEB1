// Este código define um componente de tabela para exibir e interagir com os registros de usuários.
// Ele utiliza Material-UI para os componentes de tabela e react-icons para os ícones de edição e exclusão.

import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { FaTrash, FaEdit } from "react-icons/fa";
import styled from "styled-components";

// Estilos personalizados para a tabela
const StyledTable = styled(Table)`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ccc;
`;

// Célula estilizada da tabela
const StyledTableCell = styled(TableCell)`
  padding: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  font-size: 14px;
  color: #555;
`;

// Linha estilizada da tabela
const StyledTableRow = styled(TableRow)`
  background-color: ${(props) => {
    switch (props.index % 3) {
      case 0:
        return "#f5f5f5"; // Cinza claro
      case 1:
        return "#e0e0e0"; // Cinza médio claro
      default:
        return "#fff"; // Branco
    }
  }};
`;

// Componente de Grid para exibir registros de usuários
const Grid = ({ users, setUsers, setOnEdit }) => {
  // Função para lidar com a edição de um registro
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  // Função para formatar a data no formato local
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Função para lidar com a exclusão de um registro
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este registro?");
    if (confirmDelete) {
      try {
        await axios.delete("http://localhost:8800/" + id);
        const newArray = users.filter((user) => user.id !== id);
        setUsers(newArray);
        toast.success("Registro excluído com sucesso.");
      } catch (error) {
        toast.error("Erro ao excluir o registro.");
      }
      setOnEdit(null);
    }
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell>CPF</StyledTableCell>
            <StyledTableCell>Combos</StyledTableCell>
            <StyledTableCell>Horário</StyledTableCell>
            <StyledTableCell>Data</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item, i) => (
            <StyledTableRow key={i} index={i}>
              <StyledTableCell>{item.nome}</StyledTableCell>
              <StyledTableCell>{item.cpf}</StyledTableCell>
              <StyledTableCell>{item.combo}</StyledTableCell>
              <StyledTableCell>{item.horario}</StyledTableCell>
              <StyledTableCell>{formatDate(item.data_agendamento)}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleEdit(item)}>
                  <FaEdit />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleDelete(item.id)}>
                  <FaTrash />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default Grid;
