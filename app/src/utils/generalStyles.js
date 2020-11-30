import styled from "styled-components/native";
import { StatusBar, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f4ebf7;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flex: 1;
  width: 90%;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${windowHeight}px;
`;

export const TextContainer = styled.Text`
  font-size: ${(props) => (props.isNumber ? "28px" : "22px")};
  text-align: center;

  font-weight: ${(props) => (props.isNumber ? "bold" : "400")};
`;

export const Tittle = styled.Text`
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  color: #8e44ad;
`;

export const Footer = styled.View`
  flex: 0.2;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 15px;
`;

export const Header = styled.View`
  height: 55px;

  justify-content: center;
  align-items: flex-end;

  margin-bottom: 15px;
  margin-top: ${StatusBar.currentHeight}px;
`;

export const ScrollContainer = styled.ScrollView`
  width: 100%;
`;
