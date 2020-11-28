import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, Text } from "react-native";

import { Container, Tittle, InfoContainer, TextContainer } from "./style";
import Button from "../../components/General/Button";
import TextField from "../../components/General/TextField";

export default function Home() {
  const [inputs, setInputs] = useState({ playerName: "" });

  function handleClick(name) {}

  return (
    <Container>
      <InfoContainer>
        <Tittle>Prime Guesser</Tittle>
        <TextContainer>
          Pense em um número primo de 1 a 20000, e eu irei adivinha-lo. Quantas
          tentativas será que irei precisar?
        </TextContainer>
        <TextField
          setName={() => setInputs()}
          placeholder="Digite o seu nome"
        />

        <Button onClick={handleClick} label={"Começar!"}></Button>
      </InfoContainer>
    </Container>
  );
}
