import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const NormalButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: auto;
  height: 50px;

  margin-top: 10px;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;

  background-color: ${(props) => (props.disabled ? "#9e9e9e" : "#9b59b6")};
`;

export const Label = styled.Text`
  font-size: ${(props) => (props.disabled ? "16px" : "17px")};
  font-weight: ${(props) => (props.disabled ? "400" : "600")};
`;
