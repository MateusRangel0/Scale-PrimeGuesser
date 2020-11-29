import React, { useEffect, useState } from "react";
import {
  Container,
  InfoContainer,
  TextContainer,
  Tittle,
} from "../../utils/generalStyles";
import Button from "../../components/General/Button";
import TextField from "../../components/General/TextField";

export default function GameClues({ navigation, route }) {
  const [clues, setClues] = useState({
    sum: 0,
    product: 0,
    rest: 0,
  });
  const [primes, setPrimes] = useState([]);
  const playerInfo = {
    name: route.params.name,
  };

  // useEffect(() => console.log(clues), [clues]);

  return (
    <Container>
      <InfoContainer>
        <Tittle>Vamos lá {playerInfo.name}</Tittle>
        <TextContainer>Essa vai ser minha primeira tentativa...</TextContainer>
        <TextContainer>Poderia me dar algumas pistas?</TextContainer>

        <TextField
          placeholder={"Soma dos digitos"}
          keyboardType={"decimal-pad"}
          inputName={"sum"}
          input={clues}
          setInput={setClues}
        />
        <TextField
          placeholder={"Produto dos digitos"}
          keyboardType={"decimal-pad"}
          inputName={"product"}
          input={clues}
          setInput={setClues}
        />
        <TextField
          placeholder={"Resto da divisão por 7"}
          keyboardType={"decimal-pad"}
          inputName={"rest"}
          input={clues}
          setInput={setClues}
        />
      </InfoContainer>
    </Container>
  );
}
