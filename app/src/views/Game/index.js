import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Container,
  InfoContainer,
  TextContainer,
  Tittle,
} from "../../utils/generalStyles";
import { ConditionButton, ModalBody, Label } from "./style";

import { NEXT_NUMBER_CONDITION } from "../../utils/constants";
import {
  getDigitsSum,
  getDigitsProduct,
  getDivisionRest,
} from "../../utils/generalFunctions";

export default function GameClues({ navigation, route }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [primes, setPrimes] = useState([]);
  const [attempts, setAttempts] = useState(1);
  const [clues, setClues] = useState({
    sum: 0,
    product: 0,
    rest: 0,
  });
  const [valueInfo, setvalueInfo] = useState({
    indexMin: 0,
    indexMax: 0,
    currentValue: 0,
  });

  const playerInfo = {
    name: route.params.name,
  };

  useEffect(() => {
    if (attempts === 1) loadPrimes();
  }, [attempts]);

  async function loadPrimes() {
    const primesData = JSON.parse(await AsyncStorage.getItem("primes"));
    setPrimes(primesData);
    const newCurrentValue = getCurrentValue(
      0,
      primesData.length - 1,
      primesData
    );
    setvalueInfo({
      indexMin: 0,
      indexMax: primesData.length - 1,
      currentValue: newCurrentValue,
    });
  }

  function reset() {
    setAttempts(1);
    setClues({ sum: 0, product: 0, rest: 0 });
    setModalVisible(false);
  }

  function getCurrentValue(min, max, primesArray) {
    let index = 0;
    if (attempts === 1) {
      index = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      index = Math.floor((max + min) / 2);
    }
    return primesArray[index];
  }

  function handleMissNumber(condition) {
    const newValue = {
      ...valueInfo,
    };

    if (condition === NEXT_NUMBER_CONDITION.DOWN) {
      const newIndexMax = primes.indexOf(valueInfo.currentValue) - 1;
      if (newValue.indexMax === newIndexMax || newIndexMax < 0) {
        setModalVisible(true);
      } else {
        newValue.indexMax = newIndexMax;
      }
    } else {
      const newIndexMin = primes.indexOf(valueInfo.currentValue) + 1;
      if (
        newValue.indexMin === newIndexMin ||
        newIndexMin > primes.length - 1
      ) {
        setModalVisible(true);
      } else {
        newValue.indexMin = newIndexMin;
      }
    }
    newValue.currentValue = getCurrentValue(
      newValue.indexMin,
      newValue.indexMax,
      primes
    );
    setvalueInfo(newValue);
    setAttempts(attempts + 1);
  }

  function updatePrimes(newPrimes) {
    if (newPrimes.length > 0) {
      setPrimes(newPrimes);
      const newCurrentValue = getCurrentValue(
        0,
        newPrimes.length - 1,
        newPrimes
      );
      setvalueInfo({
        indexMin: 0,
        indexMax: newPrimes.length - 1,
        currentValue: newCurrentValue,
      });
      setAttempts(attempts + 1);
    } else {
      setModalVisible(true);
    }
  }

  function handleClueSum(sum) {
    const newPrimes = primes.filter(
      (prime) => getDigitsSum(prime) === Number(sum)
    );
    updatePrimes(newPrimes);
  }

  function handleClueProduct(product) {
    const newPrimes = primes.filter(
      (prime) => getDigitsProduct(prime) === Number(product)
    );
    updatePrimes(newPrimes);
  }

  function handleClueRest(rest) {
    const newPrimes = primes.filter(
      (prime) => getDivisionRest(prime) === Number(rest)
    );
    updatePrimes(newPrimes);
  }

  return (
    <Container>
      <Modal isVisible={isModalVisible}>
        <ModalBody>
          <Label>Não há mais números válidos. Tente novamente.</Label>

          <Button title="Reiniciar Jogo" onPress={() => reset()} />
        </ModalBody>
      </Modal>
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
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder={"Soma dos digitos"}
            keyboardType={"decimal-pad"}
            onChangeText={(value) => setClues({ ...clues, sum: value })}
            value={clues.sum}
            onSubmitEditing={() => handleClueSum(clues.sum)}
          />
        </View>
        <TextInput
          placeholder={"Produto dos digitos"}
          keyboardType={"decimal-pad"}
          onChangeText={(value) => setClues({ ...clues, product: value })}
          value={clues.product}
          onSubmitEditing={() => handleClueProduct(clues.product)}
        />
        <TextInput
          placeholder={"Resto da divisão por 7"}
          keyboardType={"decimal-pad"}
          onChangeText={(value) => setClues({ ...clues, rest: value })}
          value={clues.rest}
          onSubmitEditing={() => handleClueRest(clues.rest)}
        />
      </InfoContainer>
    </Container>
  );
}
