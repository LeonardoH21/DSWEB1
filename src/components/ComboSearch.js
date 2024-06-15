// Este código define um componente de busca de combos, permitindo aos usuários buscar registros
// com base no nome do combo e na data de agendamento. Ele utiliza styled-components para estilização
// e axios para realizar requisições HTTP.

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';

// Container principal do componente de busca com estilos
const SearchContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Área de entrada com estilos
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Campo de entrada com estilos
const Input = styled.input`
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

// Rótulo com estilos
const Label = styled.label`
  font-weight: bold;
`;

// Botão de busca com estilos
const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
`;

// Componente de busca de combos
const ComboSearch = ({ setUsers }) => {
  const [combo, setCombo] = useState('');
  const [date, setDate] = useState('');

  // Função para lidar com a busca de registros
  const handleSearch = async () => {
    try {
      const res = await axios.get('http://localhost:8800/search', {
        params: { combo, data_agendamento: date }
      });
      setUsers(res.data);
      if (res.data.length === 0) {
        toast.info('Nenhum registro encontrado');
      } else {
        toast.success('Registros encontrados');
      }
    } catch (error) {
      console.error(error);
      toast.error('Erro ao buscar registros');
    }
  };

  return (
    <SearchContainer>
      <InputArea>
        <Label>Nome Combo</Label>
        <Input value={combo} onChange={(e) => setCombo(e.target.value)} />
      </InputArea>
      <InputArea>
        <Label>Data de Agendamento</Label>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </InputArea>
      <Button onClick={handleSearch}>Buscar</Button>
    </SearchContainer>
  );
};

export default ComboSearch;
