import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { Box, Button, Container, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import styled from "styled-components";

// Container do formulário com estilos personalizados
const StyledContainer = styled(Container)`
  background-color: #f0f0f0;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTextField = styled(TextField)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledFormControl = styled(FormControl)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TitleTypography = styled(Typography)`
  color: #fff;
  background-color: #333;
  padding: 8px;
  border-radius: 10px;
  text-align: center;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.cpf.value = onEdit.cpf;
      user.fone.value = onEdit.fone;
      user.combo.value = onEdit.combo;
      user.horario.value = onEdit.horario;
      user.data_agendamento.value = onEdit.data_agendamento;
    }
  }, [onEdit]);

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.cpf.value ||
      !user.fone.value ||
      !user.combo.value ||
      !user.horario.value ||
      !user.data_agendamento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    // Função para validar CPF
    function validarCPF(cpf) {
      cpf = cpf.replace(/\D/g, '');
      if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
      let soma = 0, resto;
      for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
      resto = (soma * 10) % 11;
      if ((resto === 10) || (resto === 11)) resto = 0;
      if (resto !== parseInt(cpf.substring(9, 10))) return false;
      soma = 0;
      for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
      resto = (soma * 10) % 11;
      if ((resto === 10) || (resto === 11)) resto = 0;
      if (resto !== parseInt(cpf.substring(10, 11))) return false;
      return true;
    }

    // Função para validar telefone
    function validarTelefone(telefone) {
      telefone = telefone.replace(/\D/g, '');
      if (telefone.length === 10) {
        // Validar telefone fixo
        return /^[1-9][0-9][2-8][0-9]{7}$/.test(telefone);
      } else if (telefone.length === 11) {
        // Validar telefone celular
        return /^[1-9][0-9]9[0-9]{8}$/.test(telefone);
      }
      return false;
    }

    // Validações adicionais
    if (!validarCPF(user.cpf.value)) {
      return toast.warn("CPF inválido! Deve conter 11 dígitos numéricos.");
    }

    if (!validarTelefone(user.fone.value)) {
      return toast.warn("Telefone inválido! Deve conter 10 ou 11 dígitos numéricos.");
    }

    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(user.nome.value)) {
      return toast.warn("Nome inválido! Deve conter apenas letras.");
    }

    // Atualiza ou cria um novo usuário
    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          cpf: user.cpf.value,
          fone: user.fone.value,
          combo: user.combo.value,
          horario: user.horario.value,
          data_agendamento: user.data_agendamento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          cpf: user.cpf.value,
          fone: user.fone.value,
          combo: user.combo.value,
          horario: user.horario.value,
          data_agendamento: user.data_agendamento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    // Limpa os campos do formulário
    user.nome.value = "";
    user.cpf.value = "";
    user.fone.value = "";
    user.combo.value = "";
    user.horario.value = "";
    user.data_agendamento.value = "";

    setOnEdit(null);
    getUsers();
  };

  // Função para lidar com a saída do formulário
  const handleExit = () => {
    window.location.href = "http://localhost:3000/";
  };

  return (
    <StyledContainer component="form" ref={ref} onSubmit={handleSubmit}>
      <TitleTypography variant="h6" gutterBottom>
        Formulário de Cadastro 
      </TitleTypography>
      <StyledBox>
        <StyledTextField
          label="Nome"
          name="nome"
          placeholder="Escreva o nome aqui"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onInput={(e) => (e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, ""))}
        />
        <StyledTextField
          label="CPF"
          name="cpf"
          placeholder="Escreva o CPF aqui"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11))}
        />
        <StyledTextField
          label="Telefone"
          name="fone"
          placeholder="Escreva o telefone aqui"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11))}
        />
        <StyledFormControl fullWidth variant="outlined">
          <InputLabel id="combo-label">Tipo de Combo</InputLabel>
          <Select
            labelId="combo-label"
            label="Tipo de Combo"
            name="combo"
            defaultValue=""
          >
            <MenuItem value="Box Dragão Verde">Box Dragão Verde</MenuItem>
            <MenuItem value="Box Primavera">Box Primavera</MenuItem>
            <MenuItem value="Box Fênix Vermelha">Box Fênix Vermelha</MenuItem>
            <MenuItem value="Box Leão Dourado">Box Leão Dourado</MenuItem>
            <MenuItem value="Combo Emperor">Combo Emperor</MenuItem>
            <MenuItem value="White Tiger">White Tiger</MenuItem>
            <MenuItem value="Purple Dragon">Purple Dragon</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledTextField
          label="Horário"
          name="horario"
          type="time"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <StyledTextField
          label="Data de Agendamento"
          name="data_agendamento"
          type="date"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <StyledButton type="submit" variant="contained" color="primary">
            SALVAR
          </StyledButton>
          <StyledButton type="button" variant="contained" color="secondary" onClick={handleExit}>
            SAIR
          </StyledButton>
        </Box>
      </StyledBox>
    </StyledContainer>
  );
};

export default Form;
