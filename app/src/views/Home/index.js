import React, { useEffect, useState } from "react";

import { Container } from "../../utils/generalStyles";
import { Tittle, InfoContainer, TextContainer } from "./style";
import Button from "../../components/General/Button";
import TextField from "../../components/General/TextField";

export default function Home({ navigation }) {
  const [inputs, setInputs] = useState({ playerName: "" });

  function isValidInputs() {
    return inputs.playerName && inputs.playerName.trim().length;
  }

  function onSubmit() {
    if (isValidInputs) {
      navigation.navigate("GameClues", { name: inputs.playerName });
    }
  }

  return (
    <Container>
      <InfoContainer>
        <Tittle>Prime Guesser</Tittle>
        <TextContainer>
          Pense em um número primo de 2 a 20000, e eu irei adivinha-lo. Quantas
          tentativas irei precisar?
        </TextContainer>
        <TextField setInputs={setInputs} placeholder="Digite o seu nome" />
        <Button onClick={onSubmit} label={"Começar!"}></Button>
      </InfoContainer>
    </Container>
  );
}
