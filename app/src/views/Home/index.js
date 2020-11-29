import React, { useEffect, useState } from "react";

import {
  Container,
  TextContainer,
  InfoContainer,
  Tittle,
  Footer,
} from "../../utils/generalStyles";
import Button from "../../components/General/Button";
import TextField from "../../components/General/TextField";
import { View } from "react-native";

export default function Home({ navigation }) {
  const [inputs, setInputs] = useState({ playerName: "" });

  function isValidInputs() {
    return inputs.playerName && inputs.playerName.trim().length > 0;
  }

  function handleRanking() {
    navigation.navigate("Ranking");
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
          Pense em um número primo de 1 a 20000, e eu irei adivinha-lo. Quantas
          tentativas irei precisar?
        </TextContainer>
        <TextField
          placeholder="Digite o seu nome"
          keyboardType={"default"}
          inputName={"playerName"}
          input={inputs}
          setInput={setInputs}
          width={"300px"}
        />
        <Button
          onClick={onSubmit}
          label={"Começar!"}
          disabled={!isValidInputs()}
        />
      </InfoContainer>
      <Footer left={false}>
        <TextContainer>
          <Button onClick={handleRanking} label={"Ver Ranking"} />
        </TextContainer>
      </Footer>
      <Footer left>
        <TextContainer>
          <Button label={"Números Primos"} />
        </TextContainer>
      </Footer>
    </Container>
  );
}
