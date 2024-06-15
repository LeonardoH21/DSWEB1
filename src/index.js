// Este código é responsável por definir a estrutura de uma aplicação React, incluindo
// rotas e componentes principais como formulários, grid de usuários, e páginas diversas.
// Ele também inclui estilos globais e configuração de notificações toast.

import axios from "axios"; 
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Home from "./pages/home";
import Login from "./pages/Login";
import Senha from "./pages/Senha";
import ComboSelection from "./pages/ComboSelection"; 
import Boxes from "./pages/Boxes";
import Dash from "./pages/Dash";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Box, Typography } from "@mui/material";

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  // Função assíncrona que busca os dados dos usuários da API e atualiza o estado
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect para buscar os usuários quando o componente for montado
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <GlobalStyle /> {/* Aplica os estilos globais */}
      <Container sx={{ mt: 4, p: 3, borderRadius: 2, boxShadow: 1, backgroundColor: '#ffffff' }}>
        <Typography variant="h4" gutterBottom>
          Cadastro de Combos
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Routes>
              {/* Define as rotas internas do componente App */}
              <Route exact path="/" element={<Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />} />
              <Route path="/combo" element={<ComboSelection />} />
            </Routes>
          </Box>
          <Box sx={{ flex: 2 }}>
            <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
          </Box>
        </Box>
        <ToastContainer autoClose={3000} position="bottom-left" /> {/* Container para notificações toast */}
      </Container>
    </>
  );
}

// Renderiza a aplicação principal com a definição das rotas
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define as rotas principais da aplicação */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/senha" element={<Senha />} />
        <Route path="/app" element={<App />} />
        <Route path="/combo" element={<ComboSelection />} />
        <Route path="/Boxes" element={<Boxes />} />
        <Route path="/Dash" element={<Dash />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
