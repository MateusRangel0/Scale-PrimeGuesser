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
} from "../../utils/generalStyles";

export default function Result({ navigation, route }) {
  const player = route.params;

  function handleRanking() {
    navigation.replace("Ranking");
  }

  function handleHome() {
    navigation.replace("Home");
  }

  return (
    <Container>
      <InfoContainer>
        <Tittle>Consegui!</Tittle>
        <TextContainer>
          Eu consegui, {player.playerName}! Acertei o seu número{" "}
          {player.primeNumber} e só levei {player.attempts} tentativa(s).
        </TextContainer>
      </InfoContainer>
      <Footer>
        <Button onClick={handleHome} label={"Página inicial"} />
        <Button onClick={handleRanking} label={"Ver Ranking"} />
      </Footer>
    </Container>
  );
}
