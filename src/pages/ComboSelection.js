// Este código é responsável por definir a estrutura da página de seleção de combos,
// incluindo componentes para busca de combos, exibição de resultados de busca e 
// exibição de todos os registros. Ele utiliza styled-components para estilização.

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ComboSearch from '../components/ComboSearch';
import Grid from '../components/SimpleGrid';
import axios from 'axios';
import Typography from '@mui/material/Typography';

// Definição do container principal com estilos
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #999494;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  color: #000; /* Texto preto */
  font-family: 'Arial', sans-serif;
`;

// Definição do cabeçalho com estilos
const Header = styled.div`
  display: flex;
  justify-content: center;
  color: #000; /* Texto preto */
`;

// Definição do conteúdo principal com estilos
const Content = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

// Definição do painel esquerdo com estilos
const LeftPane = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Definição do painel direito com estilos
const RightPane = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Título do grid com estilos
const GridTitle = styled.h3`
  color: #fff; /* Texto branco */
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  background-color: #4d4b4b7d; /* Fundo preto claro transparente */
  padding: 10px;
  border-radius: 5px;
`;

const ComboSelection = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  // Função assíncrona que busca os dados dos usuários da API e atualiza o estado
  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800');
      setAllUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect para buscar os usuários quando o componente for montado
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <Header>
        <GridTitle>Bem Vindo a Seleção de Combos</GridTitle>
      </Header>
      <Content>
        <LeftPane>
          <GridTitle>Escreva o Combo/Data</GridTitle>
          <ComboSearch setUsers={setUsers} />
        </LeftPane>
        <RightPane>
          <GridTitle>Resultados da Pesquisa</GridTitle>
          <Grid users={users} setUsers={setUsers} setOnEdit={() => {}} />
          <GridTitle>Todos os Registros</GridTitle>
          <Grid users={allUsers} setUsers={setAllUsers} setOnEdit={() => {}} />
        </RightPane>
      </Content>
    </Container>
  );
};

export default ComboSelection;
