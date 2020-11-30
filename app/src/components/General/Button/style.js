import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  flex: ${(props) => (props.isStart ? "0.2" : "0.5")};
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
`;

export const NormalButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: ${(props) => (props.isStart ? "140px" : "100px")};
  height: ${(props) => (props.isStart ? "80px" : "60px")};

  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;

  background-color: ${(props) => (props.disabled ? "#cccccc" : "#9b59b6")};
`;

export const Label = styled.Text`
  font-size: ${(props) => (props.isStart ? "18px" : "14px")};
  font-weight: ${(props) => (props.disabled ? "400" : "bold")};
  color: white;
`;
