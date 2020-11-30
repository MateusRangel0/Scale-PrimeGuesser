import styled from "styled-components/native";

export const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 15px;
`;

export const ConditionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: ${(props) => (props.isCorrectButton ? "110px" : "70px")};
  height: ${(props) => (props.isCorrectButton ? "60px" : "50px")};

  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 25px;

  background-color: #9b59b6;
`;

export const ButtonLabel = styled.Text`
  color: white;
  font-weight: bold;
`;
