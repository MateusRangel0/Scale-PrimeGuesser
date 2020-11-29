import styled from "styled-components/native";

export const Input = styled.TextInput`
  height: 30px;
  width: ${(props) => (props.width ? props.width : "200px")};

  margin-top: 10px;
  border-color: grey;
  padding-left: 10px;

  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 2px;
`;
