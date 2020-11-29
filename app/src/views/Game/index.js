import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";

import {
  Container,
  InfoContainer,
  TextContainer,
  Tittle,
} from "../../utils/generalStyles";
import { NEXT_NUMBER_CONDITION } from "../../utils/constants";
import { ConditionButton } from "./style";
import TextField from "../../components/General/TextField";

export default function GameClues({ navigation, route }) {
  const [primes, setPrimes] = useState([]);
  const [valueInfo, setvalueInfo] = useState({
    indexMin: 0,
    indexMax: 0,
    currentValue: 0,
  });
  const [attempts, setAttempts] = useState(1);

  const playerInfo = {
    name: route.params.name,
  };

  useEffect(() => {
    async function loadPrimes() {
      const primesData = JSON.parse(await AsyncStorage.getItem("primes"));
      setPrimes(primesData);
      const newCurrentValue = getCurrentValue(0, primesData.length, primesData);
      setvalueInfo({
        ...valueInfo,
        indexMax: primesData.length,
        currentValue: newCurrentValue,
      });
    }
    loadPrimes();
  }, []);

  useEffect(() => {
    console.log(valueInfo);
  }, [valueInfo]);

  function getCurrentValue(min, max, primesArray) {
    let index = 0;
    if (attempts === 1) {
      index = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      index = Math.floor((max + min) / 2);
    }
    console.log("primo", primesArray[index]);
    console.log("index", index);

    return primesArray[index];
  }

  function handleMissNumber(condition) {
    const newValue = {
      ...valueInfo,
    };

    if (condition === NEXT_NUMBER_CONDITION.DOWN) {
      newValue.indexMax = primes.indexOf(valueInfo.currentValue) - 1;
    } else {
      newValue.indexMin = primes.indexOf(valueInfo.currentValue) + 1;
    }
    newValue.currentValue = getCurrentValue(
      newValue.indexMin,
      newValue.indexMax,
      primes
    );
    setvalueInfo(newValue);
    setAttempts(attempts + 1);
  }

  return (
    <Container>
      <InfoContainer>
        <Tittle>Vamos lá {playerInfo.name}</Tittle>
        <TextContainer>Você pensou no número</TextContainer>
        <TextContainer>{primes.length && valueInfo.currentValue}</TextContainer>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <ConditionButton
            onPress={() => handleMissNumber(NEXT_NUMBER_CONDITION.DOWN)}
          >
            <Text>MENOR</Text>
          </ConditionButton>

          <ConditionButton>
            <Text>ACERTOU</Text>
          </ConditionButton>
          <ConditionButton
            onPress={() => handleMissNumber(NEXT_NUMBER_CONDITION.UPPER)}
          >
            <Text>MAIOR</Text>
          </ConditionButton>
        </View>
        <Text>{attempts}</Text>
        {/* 
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
        /> */}
      </InfoContainer>
    </Container>
  );
}
