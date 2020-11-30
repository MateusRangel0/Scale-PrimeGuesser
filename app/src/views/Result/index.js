// libs
import React, { useEffect, useState } from "react";

// components
import Button from "../../components/General/Button";

// styles
import {
  Container,
  TextContainer,
  InfoContainer,
  Tittle,
  Footer,
  Header,
} from "../../utils/generalStyles";

export default function Result({ navigation, route }) {
  const player = route.params;

  function handleRanking() {
    navigation.replace("Ranking");
  }

  function handleHome() {
    navigation.pop();
  }

  return (
    <Container>
      <Header>
        <Tittle>Resultado</Tittle>
      </Header>
      <InfoContainer>
        <Tittle>Eu consegui, {player.playerName}!</Tittle>
        <TextContainer>Tentativas: {player.attempts}</TextContainer>
        <TextContainer>Número: {player.primeNumber}</TextContainer>
      </InfoContainer>
      <TextContainer isNumber>Tempo levado: {player.time}</TextContainer>
      <Footer>
        <Button onClick={handleHome} label={"Início"} />
        <Button onClick={handleRanking} label={"Ranking"} />
      </Footer>
    </Container>
  );
}
