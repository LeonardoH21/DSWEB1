import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ComboSearch from '../components/ComboSearch';
import Grid from '../components/SimpleGrid';
import axios from 'axios';

// Definição do container principal com estilos
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Ajuste do gap */
  background-color: #f5f5f5;
  padding: 10px; /* Ajuste do padding */
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  color: #333;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

// Definição do cabeçalho com estilos
const Header = styled.div`
  display: flex;
  justify-content: center;
  color: #f3f3f3;
  font-size: 24px;
  font-weight: bold;
  background-color: #444;
  padding: 10px; /* Ajuste do padding */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Definição do conteúdo principal com estilos
const Content = styled.div`
  display: flex;
  gap: 10px; /* Ajuste do gap */
  width: 100%;
`;

// Definição do painel esquerdo com estilos
const LeftPane = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Ajuste do gap */
  background-color: #fff;
  padding: 10px; /* Ajuste do padding */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Definição do painel direito com estilos
const RightPane = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Ajuste do gap */
  background-color: #fff;
  padding: 10px; /* Ajuste do padding */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Título do grid com fundo
const GridTitleWithBackground = styled.h3`
  color: #333;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
  font-family: 'Arial', sans-serif;
`;

// Título do grid sem fundo
const GridTitleNoBackground = styled.h3`
  color: #333;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
  font-family: 'Arial', sans-serif;
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
      <Header>Bem Vindo à Seleção de Combos</Header>
      <Content>
        <LeftPane>
          <GridTitleWithBackground>Escreva o Combo/Data</GridTitleWithBackground>
          <ComboSearch setUsers={setUsers} />
        </LeftPane>
        <RightPane>
          <GridTitleNoBackground>Resultados da Pesquisa</GridTitleNoBackground>
          <Grid users={users} setUsers={setUsers} setOnEdit={() => {}} />
          <GridTitleNoBackground>Todos os Registros</GridTitleNoBackground>
          <Grid users={allUsers} setUsers={setAllUsers} setOnEdit={() => {}} />
        </RightPane>
      </Content>
    </Container>
  );
};

export default ComboSelection;
