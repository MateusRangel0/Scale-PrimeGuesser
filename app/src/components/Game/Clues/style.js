import styled from "styled-components/native";
import { Input } from "../../General/TextField/style";

export const InfoContainer = styled.View`
  flex: 1.5;
`;

export const ClueContainer = styled.View`
  flex-direction: row;

  margin-bottom: 10px;

  align-items: center;
  justify-content: center;
`;

export const ClueInput = styled(Input)`
  margin-top: 0;
  padding-left: 0;

  text-align: center;

  width: 80%;
  height: 35px;

  border-radius: 5px;
  background-color: ${(props) => (props.editable ? "#fff" : "#cccccc")};
`;

export const IconContainer = styled.TouchableOpacity`
  margin-left: 10px;
`;
