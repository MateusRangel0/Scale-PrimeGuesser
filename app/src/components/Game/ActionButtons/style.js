import styled from "styled-components/native";

export const ButtonsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ConditionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: auto;
  height: 50px;

  margin-top: 10px;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;

  background-color: #9b59b6;
`;