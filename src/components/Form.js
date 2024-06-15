// Este código define um componente de formulário para cadastro de pedidos,
// permitindo aos usuários adicionar e editar registros com validações específicas
// para os campos de entrada. Ele utiliza axios para realizar requisições HTTP,
// Material-UI para os componentes de interface e react-toastify para exibir notificações.

import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { Box, Button, Container, TextField, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

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
    <Container component="form" ref={ref} onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Formulário de Cadastro de Pedidos
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nome"
          name="nome"
          placeholder="Escreva o nome aqui"
          fullWidth
          variant="outlined"
          sx={{ boxShadow: 3 }}
          InputLabelProps={{ shrink: true }}
          onInput={(e) => (e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, ""))}
        />
        <TextField
          label="CPF"
          name="cpf"
          placeholder="Escreva o CPF aqui"
          fullWidth
          variant="outlined"
          sx={{ boxShadow: 3 }}
          InputLabelProps={{ shrink: true }}
          onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11))}
        />
        <TextField
          label="Telefone"
          name="fone"
          placeholder="Escreva o telefone aqui"
          fullWidth
          variant="outlined"
          sx={{ boxShadow: 3 }}
          InputLabelProps={{ shrink: true }}
          onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11))}
        />
        <FormControl fullWidth variant="outlined" sx={{ boxShadow: 3 }}>
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
        </FormControl>
        <TextField
          label="Horário"
          name="horario"
          type="time"
          fullWidth
          variant="outlined"
          sx={{ boxShadow: 3 }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Data de Agendamento"
          name="data_agendamento"
          type="date"
          fullWidth
          variant="outlined"
          sx={{ boxShadow: 3 }}
          InputLabelProps={{ shrink: true }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            SALVAR
          </Button>
          <Button type="button" variant="contained" color="secondary" onClick={handleExit}>
            SAIR
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
