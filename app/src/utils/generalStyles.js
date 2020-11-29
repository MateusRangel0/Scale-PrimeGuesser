import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f4ebf7;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  width: 80%;
  align-items: center;
`;

export const TextContainer = styled.Text`
  font-size: 18px;
  text-align: center;
`;

export const Tittle = styled.Text`
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  color: #8e44ad;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 10%;
  left: ${(props) => (props.left ? "8%" : "65%")};
`;
