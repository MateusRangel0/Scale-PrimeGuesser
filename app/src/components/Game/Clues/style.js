import styled from "styled-components/native";
import { Input } from "../../General/TextField/style";

export const InfoContainer = styled.View``;

export const ClueContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ClueInput = styled(Input)`
  margin-top: 0;
  padding-left: 0;

  background-color: ${(props) =>
    props.editable ? "#fff" : "rgb(158, 158, 158)"};
`;

export const iconContainer = styled.View``;
