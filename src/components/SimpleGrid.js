import React from 'react';
import styled from 'styled-components';
import { TableContainer, Paper } from '@mui/material';

// Estilos personalizados para a tabela
const StyledContainer = styled(TableContainer)`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const StyledTable = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledTableRow = styled.li`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 15px;
  background-color: ${(props) => (props.index % 2 === 0 ? "#f9f9f9" : "#fff")};
  border-bottom: 1px solid #eee;
  align-items: center;
`;

const StyledTableCell = styled.div`
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  font-size: 14px;
  color: #555;
`;

const TableHeader = styled(StyledTableRow)`
  background-color: #aeafa1;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

const SimpleGrid = ({ users }) => {
  // Função para formatar a data no formato local
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <StyledContainer component={Paper} sx={{ mt: 4 }}>
      <StyledTable>
        <TableHeader>
          <StyledTableCell>Nome</StyledTableCell>
          <StyledTableCell>CPF</StyledTableCell>
          <StyledTableCell>Procedimento</StyledTableCell>
          <StyledTableCell>Horário</StyledTableCell>
          <StyledTableCell>Data</StyledTableCell>
        </TableHeader>
        {users.map((item, i) => (
          <StyledTableRow key={i} index={i}>
            <StyledTableCell>{item.nome}</StyledTableCell>
            <StyledTableCell>{item.cpf}</StyledTableCell>
            <StyledTableCell>{item.combo}</StyledTableCell>
            <StyledTableCell>{item.horario}</StyledTableCell>
            <StyledTableCell>{formatDate(item.data_agendamento)}</StyledTableCell>
          </StyledTableRow>
        ))}
      </StyledTable>
    </StyledContainer>
  );
};

export default SimpleGrid;
