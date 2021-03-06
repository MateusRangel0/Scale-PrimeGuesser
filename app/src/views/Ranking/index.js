// libs
import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";

// services
import Api from "../../services/api";

// utils
import { Container, Tittle, Header } from "../../utils/generalStyles";

// styles
import {
  Card,
  LeftInfo,
  RightInfo,
  Time,
  Position,
  PlayerInfo,
  PlayerName,
  Attempts,
} from "./style";

export default function Ranking({ navigation }) {
  const [rankingData, setRankingData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getRankings() {
      const { data } = await Api.get(`/ranking?page=${page}&pageSize=10`);
      if (data) setRankingData([...rankingData, ...data]);
    }
    getRankings();
  }, [page]);

  function render({ item, index }) {
    return (
      <Card>
        <LeftInfo>
          <Position>
            <Text>{index + 1}</Text>
          </Position>
          <PlayerInfo>
            <PlayerName>{item.playerName}</PlayerName>
            <Attempts>Tentativas: {item.attempts}</Attempts>
          </PlayerInfo>
        </LeftInfo>
        <RightInfo>
          <Time>{item.time}</Time>
        </RightInfo>
      </Card>
    );
  }

  return (
    <Container>
      <Header>
        <Tittle>Ranking de Jogadores</Tittle>
      </Header>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={rankingData}
        renderItem={render}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
}
