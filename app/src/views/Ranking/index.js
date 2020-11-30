import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text } from "react-native";

import Api from "../../services/api";

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

import {
  Container,
  InfoContainer,
  Tittle,
  Header,
} from "../../utils/generalStyles";

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
          <Position>{index + 1}</Position>
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
