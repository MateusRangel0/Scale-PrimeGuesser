// libs
import React, { useState, createRef, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// utils
import {
  getDigitsSum,
  getDigitsProduct,
  getDivisionRest,
} from "../../../utils/generalFunctions";

// styles
import {
  InfoContainer,
  ClueContainer,
  ClueInput,
  IconContainer,
} from "./style";

export default function Clues({
  primes,
  setPrimes,
  attempts,
  clues,
  getCurrentValue,
  setAttempts,
  setModalVisible,
  setValueInfo,
  setActiveTimer,
  setClues,
  reload,
  minIndex,
  maxIndex,
}) {
  const [inputsActive, setInputsActive] = useState({
    sum: true,
    product: true,
    rest: true,
  });

  const refSum = createRef();
  const refProduct = createRef();
  const refRest = createRef();

  useEffect(() => {
    if (reload)
      setInputsActive({
        sum: true,
        product: true,
        rest: true,
      });
  }, [reload]);

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
    if (sum) {
      refSum.current.clear();
      setInputsActive({ ...inputsActive, sum: false });
      const maxPrime = Number(primes[maxIndex]);
      const minPrime = Number(primes[minIndex]);

      const newPrimes = primes.filter(
        (prime) =>
          getDigitsSum(prime) === Number(sum) &&
          prime <= maxPrime &&
          prime >= minPrime
      );
      updatePrimes(newPrimes);
    }
  }

  useEffect(() => {}, [minIndex, maxIndex]);

  function handleClueProduct(product) {
    if (product) {
      refProduct.current.clear();
      setInputsActive({ ...inputsActive, product: false });
      const maxPrime = Number(primes[maxIndex]);
      const minPrime = Number(primes[minIndex]);

      const newPrimes = primes.filter(
        (prime) =>
          getDigitsProduct(prime) === Number(product) &&
          prime <= maxPrime &&
          prime >= minPrime
      );
      updatePrimes(newPrimes);
    }
  }

  function handleClueRest(rest) {
    if (rest) {
      refRest.current.clear();
      const maxPrime = Number(primes[maxIndex]);
      const minPrime = Number(primes[minIndex]);

      setInputsActive({ ...inputsActive, rest: false });
      const newPrimes = primes.filter(
        (prime) =>
          getDivisionRest(prime) === Number(rest) &&
          prime <= maxPrime &&
          prime >= minPrime
      );
      updatePrimes(newPrimes);
    }
  }

  return (
    <InfoContainer>
      <ClueContainer>
        <ClueInput
          placeholder={"Soma dos digitos"}
          keyboardType={"decimal-pad"}
          onChangeText={(value) => setClues({ ...clues, sum: value })}
          onSubmitEditing={() => handleClueSum(clues.sum)}
          ref={refSum}
          editable={inputsActive.sum}
        />
        <IconContainer onPress={() => handleClueSum(clues.sum)}>
          <Icon name="send" size={22} color={"#8e44ad"} />
        </IconContainer>
      </ClueContainer>
      <ClueContainer>
        <ClueInput
          placeholder={"Produto dos digitos"}
          keyboardType={"decimal-pad"}
          onChangeText={(value) => setClues({ ...clues, product: value })}
          onSubmitEditing={() => handleClueProduct(clues.product)}
          ref={refProduct}
          editable={inputsActive.product}
        />
        <IconContainer onPress={() => handleClueProduct(clues.product)}>
          <Icon name="send" size={22} color={"#8e44ad"} />
        </IconContainer>
      </ClueContainer>
      <ClueContainer>
        <ClueInput
          placeholder={"Resto da divisão por 7"}
          keyboardType={"decimal-pad"}
          onChangeText={(value) => setClues({ ...clues, rest: value })}
          onSubmitEditing={() => handleClueRest(clues.rest)}
          ref={refRest}
          editable={inputsActive.rest}
        />
        <IconContainer onPress={() => handleClueRest(clues.rest)}>
          <Icon name="send" size={22} color={"#8e44ad"} />
        </IconContainer>
      </ClueContainer>
    </InfoContainer>
  );
}
