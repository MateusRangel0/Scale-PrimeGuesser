import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #ac7ebf;

  margin-bottom: 10px;
  border-radius: 15px;
  padding: 15px;

  height: 85px;
  width: ${windowWidth / 1.2}px;
`;

export const LeftInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RightInfo = styled.View``;

export const Time = styled.Text`
  font-size: 18px;
  font-weight: bold;

  color: white;
`;

export const Position = styled.View`
  border-radius: 50px;
  background-color: aliceblue;

  align-items: center;
  justify-content: center;
  margin-right: 10px;

  font-size: 18px;
  width: 38px;
  height: 38px;
`;

export const PlayerInfo = styled.View`
  flex-direction: column;
`;

export const PlayerName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const Attempts = styled.Text`
  font-weight: bold;
`;
