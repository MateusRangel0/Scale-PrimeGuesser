// libs
import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// utils
import {
  getDigitsSum,
  getDigitsProduct,
  getDivisionRest,
} from "../../utils/generalFunctions";

// components
import ErrorModal from "../../components/Game/ErrorModal";
import Timer from "../../components/Game/Timer";
import ActionButtons from "../../components/Game/ActionButtons";

// styles
import {
  Container,
  InfoContainer,
  TextContainer,
  Tittle,
} from "../../utils/generalStyles";

export default function GameClues({ navigation, route }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [activeTimer, setActiveTimer] = useState(true);
  const [timerReload, setTimerReload] = useState(false);
  const [primes, setPrimes] = useState([]);
  const [attempts, setAttempts] = useState(1);
  const [clues, setClues] = useState({
    sum: 0,
    product: 0,
    rest: 0,
  });
  const [valueInfo, setValueInfo] = useState({
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

  function reset() {
    setAttempts(1);
    setClues({ sum: 0, product: 0, rest: 0 });
    setCalledNumbers([]);
    setModalVisible(false);
    setTimerReload(true);
    setActiveTimer(true);
  }

  async function loadPrimes() {
    const primesData = JSON.parse(await AsyncStorage.getItem("primes"));
    setPrimes(primesData);
    const newCurrentValue = getCurrentValue(
      0,
      primesData.length - 1,
      primesData
    );
    setValueInfo({
      indexMin: 0,
      indexMax: primesData.length - 1,
      currentValue: newCurrentValue,
    });
    setCalledNumbers([...calledNumbers, newCurrentValue]);
  }

  function getCurrentValue(min, max, primesArray) {
    let index = 0;
    if (attempts === 1) {
      index = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      index = Math.floor((max + min) / 2);
    }
    const newPrime = primesArray[index];
    if (calledNumbers.includes(newPrime)) {
      setActiveTimer(false);
      return setModalVisible(true);
    } else return newPrime;
  }

  function updatePrimes(newPrimes) {
    if (newPrimes.length > 0) {
      setPrimes(newPrimes);
      const newCurrentValue = getCurrentValue(
        0,
        newPrimes.length - 1,
        newPrimes
      );
      setValueInfo({
        indexMin: 0,
        indexMax: newPrimes.length - 1,
        currentValue: newCurrentValue,
      });
      setAttempts(attempts + 1);
    } else {
      setActiveTimer(false);
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

  function correctNumber() {
    setActiveTimer(false);
  }

  function finishGame(time) {
    if (!isModalVisible) {
      console.log(time);
    } else {
      console.log("error :[");
    }
  }

  return (
    <Container>
      <ErrorModal
        isVisible={isModalVisible}
        label={"Não há mais números válidos. Tente novamente."}
        onClose={() => reset()}
        buttonLabel={"Reiniciar"}
      />

      <Timer
        active={activeTimer}
        onFinish={(time) => finishGame(time)}
        reload={timerReload}
        setReload={setTimerReload}
      />

      <InfoContainer>
        <Tittle>Vamos lá {playerInfo.name}</Tittle>
        <TextContainer>Você pensou no número</TextContainer>
        <TextContainer>{primes.length && valueInfo.currentValue}</TextContainer>

        <ActionButtons
          primes={primes}
          valueInfo={valueInfo}
          calledNumbers={calledNumbers}
          attempts={attempts}
          setModalVisible={setModalVisible}
          setValueInfo={setValueInfo}
          setAttempts={setAttempts}
          setCalledNumbers={setCalledNumbers}
          getCurrentValue={getCurrentValue}
          correctNumberFunction={correctNumber}
        />

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
