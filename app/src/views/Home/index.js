// libs
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// components
import Button from "../../components/General/Button";
import TextField from "../../components/General/TextField";

// utils
import { sieve } from "../../utils/primes";

// style
import {
  Container,
  TextContainer,
  InfoContainer,
  Tittle,
  Footer,
} from "../../utils/generalStyles";
import { GeneralContainer, GeneralTextsContainer } from "./style";

export default function Home({ navigation }) {
  const [inputs, setInputs] = useState({ playerName: "" });

  function isValidInputs() {
    return inputs.playerName && inputs.playerName.trim().length > 0;
  }

  function handleRanking() {
    navigation.navigate("Ranking");
  }

  function onSubmit() {
    if (isValidInputs()) {
      navigation.navigate("GameClues", { name: inputs.playerName });
    }
  }

  async function generatePrimes() {
    try {
      const value = await AsyncStorage.getItem("primes");
      if (!value) {
        const jsonPrimes = JSON.stringify(sieve());
        await AsyncStorage.setItem("primes", jsonPrimes);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    generatePrimes();
  }, []);

  return (
    <Container>
      <InfoContainer>
        <GeneralContainer>
          <GeneralTextsContainer>
            <Tittle>Prime Guesser!</Tittle>
            <TextContainer>
              Pense em um número primo de 1 a 20000, e eu irei adivinha-lo.
              Quantas tentativas irei precisar?
            </TextContainer>
            <TextField
              placeholder="Digite o seu nome"
              keyboardType={"default"}
              inputName={"playerName"}
              input={inputs}
              setInput={setInputs}
              width={"300px"}
            />
          </GeneralTextsContainer>
          <Button
            onClick={onSubmit}
            label={"COMEÇAR"}
            disabled={!isValidInputs()}
            isStart={true}
          />
        </GeneralContainer>
      </InfoContainer>
      <Footer>
        <Button onClick={handleRanking} label={"Ranking"} />
      </Footer>
    </Container>
  );
}
