import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Importe o vídeo
import backgroundVideo from './BackgroundVideo.mp4';

const DashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const Button1 = styled(Button)`
  background: linear-gradient(45deg, blue, yellow);
  &:hover {
    background: linear-gradient(45deg, yellow, blue);
  }
`;

const Button2 = styled(Button)`
  background: linear-gradient(45deg, purple, green);
  &:hover {
    background: linear-gradient(45deg, green, purple);
  }
`;

const Dash = () => {
  return (
    <DashContainer>
      <VideoBackground autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <ContentContainer>
        <Container>
          <Title>Cadastro de Pedidos</Title>
          <Button1 to="/app">Cadastro de Pedidos</Button1>
        </Container>
        <Container>
          <Title>Seleção de Pedidos</Title>
          <Button2 to="/Combo">Seleção de Pedidos</Button2>
        </Container>
      </ContentContainer>
    </DashContainer>
  );
};

export default Dash;
