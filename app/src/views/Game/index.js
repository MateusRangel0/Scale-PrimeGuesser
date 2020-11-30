// libs
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// components
import ErrorModal from "../../components/Game/ErrorModal";
import Timer from "../../components/Game/Timer";
import ActionButtons from "../../components/Game/ActionButtons";
import Clues from "../../components/Game/Clues";

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
          setActiveTimer={setActiveTimer}
          getCurrentValue={getCurrentValue}
          correctNumberFunction={correctNumber}
          minIndex={Number(valueInfo.indexMin)}
          maxIndex={Number(valueInfo.indexMax)}
        />

        <Clues
          primes={primes}
          setPrimes={setPrimes}
          attempts={attempts}
          clues={clues}
          getCurrentValue={getCurrentValue}
          setAttempts={setAttempts}
          setModalVisible={setModalVisible}
          setValueInfo={setValueInfo}
          setActiveTimer={setActiveTimer}
          setClues={setClues}
          reload={timerReload}
          minIndex={Number(valueInfo.indexMin)}
          maxIndex={Number(valueInfo.indexMax)}
        />

        <Text>{attempts}</Text>
      </InfoContainer>
    </Container>
  );
}
