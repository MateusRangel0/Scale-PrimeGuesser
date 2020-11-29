import styled from "styled-components/native";

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

export const Label = styled.Text`
  font-size: ${(props) => (props.disabled ? "16px" : "17px")};
  font-weight: ${(props) => (props.disabled ? "400" : "600")};

  text-align: center;
`;

export const ModalBody = styled.View`
  height: 30%;
  width: 70%;

  background-color: white;
  border-radius: 10px;

  align-self: center;
  align-items: center;
  justify-content: space-evenly;
  padding: 4%;
`;
