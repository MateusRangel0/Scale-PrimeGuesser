// libs
import React from "react";
import { Text } from "react-native";

// utils
import { NEXT_NUMBER_CONDITION } from "../../../utils/constants";

// styles
import { ButtonsContainer, ConditionButton } from "./style";

export default function ActionButtons({
  primes,
  valueInfo,
  calledNumbers,
  attempts,
  setModalVisible,
  setValueInfo,
  setAttempts,
  setCalledNumbers,
  setActiveTimer,
  getCurrentValue,
  correctNumberFunction,
  maxIndex,
  minIndex,
}) {
  function handleMissNumber(condition) {
    if (maxIndex === minIndex) {
      setActiveTimer(false);
      return setModalVisible(true);
    }
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
    setCalledNumbers([...calledNumbers, newValue.currentValue]);
    setValueInfo(newValue);
    setAttempts(attempts + 1);
  }

  return (
    <ButtonsContainer>
      <ConditionButton
        onPress={() => handleMissNumber(NEXT_NUMBER_CONDITION.DOWN)}
      >
        <Text>MENOR</Text>
      </ConditionButton>

      <ConditionButton onPress={() => correctNumberFunction()}>
        <Text>ACERTOU</Text>
      </ConditionButton>

      <ConditionButton
        onPress={() => handleMissNumber(NEXT_NUMBER_CONDITION.UPPER)}
      >
        <Text>MAIOR</Text>
      </ConditionButton>
    </ButtonsContainer>
  );
}
