// libs
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// services
import Api from "../../services/api";

// components
import ErrorModal from "../../components/Game/ErrorModal";
import Timer from "../../components/Game/Timer";
import ActionButtons from "../../components/Game/ActionButtons";
import Clues from "../../components/Game/Clues";

// util
import { formatTime } from "../../utils/time";

// styles
import {
  Container,
  InfoContainer,
  TextContainer,
  Tittle,
  Header,
  ScrollContainer,
} from "../../utils/generalStyles";
import { GeneralTextContainer, Attempts } from "./style";

export default function GameClues({ navigation, route }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [activeTimer, setActiveTimer] = useState(true);
  const [timerReload, setTimerReload] = useState(false);
  const [primes, setPrimes] = useState([]);
  const [attempts, setAttempts] = useState(1);
  const [loading, setLoading] = useState(false);
  const [clues, setClues] = useState({
    sum: null,
    product: null,
    rest: null,
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

  async function submitScore(playerTime) {
    const body = {
      playerName: playerInfo.name,
      time: formatTime(playerTime),
      attempts: attempts,
      primeNumber: valueInfo.currentValue,
    };
    try {
      const { playerName, time, attempts, primeNumber } = body;

      if (!playerName || !time || !attempts || !primeNumber) {
        return setModalVisible(true);
      }
      setLoading(true);
      await Api.post(`/ranking`, body);
      return navigation.replace("Result", body);
    } catch (error) {
      setModalVisible(true);
    }
  }

  async function finishGame(time) {
    if (!isModalVisible && !loading) {
      submitScore(time);
    }
  }

  return (
    <Container>
      <Header>
        <Tittle>Prime Guesser!</Tittle>
      </Header>
      <ErrorModal
        isVisible={isModalVisible}
        label={"Algo deu errado nessa rodada. Tente novamente."}
        onClose={() => reset()}
        buttonLabel={"Reiniciar"}
      />
      <ScrollContainer>
        <Timer
          active={activeTimer}
          onFinish={(time) => finishGame(time)}
          reload={timerReload}
          setReload={setTimerReload}
        />
        <Attempts>Tentativa: {attempts}</Attempts>

        <InfoContainer>
          <GeneralTextContainer>
            <Tittle>Vamos lá {playerInfo.name}</Tittle>
            <TextContainer>Você pensou no número:</TextContainer>
            <TextContainer isNumber={true}>
              {primes.length && valueInfo.currentValue}
            </TextContainer>
          </GeneralTextContainer>

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
            loading={loading}
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
        </InfoContainer>
      </ScrollContainer>
    </Container>
  );
}
