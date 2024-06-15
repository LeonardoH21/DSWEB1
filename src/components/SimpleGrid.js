// Este código define um componente de tabela simples para exibir dados de usuários em uma grade.
// Ele utiliza o Material-UI para os componentes de tabela e styled-components para estilos personalizados.

import React from 'react';
import styled from 'styled-components';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Estilos personalizados para a tabela simples
const SimpleGridTable = styled(Table)`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ccc;
`;

// Estilo para o cabeçalho da tabela
const Th = styled(TableCell)`
  text-align: start;
  border-bottom: 2px solid #ccc;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 16px;
  color: #333;
`;

// Estilo para as células da tabela
const Td = styled(TableCell)`
  padding: 15px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  font-size: 14px;
  color: #555;
`;

// Estilo para as linhas da tabela
const StyledTableRow = styled(TableRow)`
  background-color: ${(props) => {
    switch (props.index % 3) {
      case 0:
        return '#f5f5f5'; // Cinza claro
      case 1:
        return '#e0e0e0'; // Cinza médio claro
      default:
        return '#fff'; // Branco
    }
  }};
`;

// Componente de Tabela Simples para exibir os dados dos usuários
const SimpleGrid = ({ users }) => {
  // Função para formatar a data no formato local
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); 
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <SimpleGridTable>
        <TableHead>
          <TableRow>
            <Th>Nome</Th>
            <Th>CPF</Th>
            <Th>Procedimento</Th>
            <Th>Horário</Th>
            <Th>Data</Th>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item, i) => (
            <StyledTableRow key={i} index={i}>
              <Td>{item.nome}</Td>
              <Td>{item.cpf}</Td>
              <Td>{item.combo}</Td>
              <Td>{item.horario}</Td>
              <Td>{formatDate(item.data_agendamento)}</Td>
            </StyledTableRow>
          ))}
        </TableBody>
      </SimpleGridTable>
    </TableContainer>
  );
};

export default SimpleGrid;
