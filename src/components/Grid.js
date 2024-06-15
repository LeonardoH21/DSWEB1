import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { IconButton } from "@mui/material";
import { FaTrash, FaEdit } from "react-icons/fa";
import styled from "styled-components";

// Estilos personalizados para a tabela
const TableContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

// Lista estilizada
const StyledTable = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

// Item da lista estilizada
const StyledTableRow = styled.li`
  display: grid;
  grid-template-columns: repeat(6, 1fr) auto auto;
  gap: 10px;
  padding: 15px;
  background-color: ${(props) => (props.index % 2 === 0 ? "#f9f9f9" : "#fff")};
  border-bottom: 1px solid #eee;
  align-items: center;
`;

// Célula estilizada da tabela
const StyledTableCell = styled.div`
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  font-size: 14px;
  color: #555;
`;

// Título da tabela
const TableHeader = styled(StyledTableRow)`
  background-color: #aeafa1;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

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
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <StyledTableCell>Nome</StyledTableCell>
          <StyledTableCell>CPF</StyledTableCell>
          <StyledTableCell>Combos</StyledTableCell>
          <StyledTableCell>Horário</StyledTableCell>
          <StyledTableCell>Data</StyledTableCell>
          <StyledTableCell alignCenter></StyledTableCell>
          <StyledTableCell alignCenter></StyledTableCell>
        </TableHeader>
        {users.map((item, i) => (
          <StyledTableRow key={i} index={i}>
            <StyledTableCell>{item.nome}</StyledTableCell>
            <StyledTableCell>{item.cpf}</StyledTableCell>
            <StyledTableCell>{item.combo}</StyledTableCell>
            <StyledTableCell>{item.horario}</StyledTableCell>
            <StyledTableCell>{formatDate(item.data_agendamento)}</StyledTableCell>
            <StyledTableCell alignCenter>
              <IconButton onClick={() => handleEdit(item)}>
                <FaEdit />
              </IconButton>
            </StyledTableCell>
            <StyledTableCell alignCenter>
              <IconButton onClick={() => handleDelete(item.id)}>
                <FaTrash />
              </IconButton>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </StyledTable>
    </TableContainer>
  );
};

export default Grid;
