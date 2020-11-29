import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import api from "../../services/api";

import {
  Container,
  InfoContainer,
  Tittle,
  TextContainer,
} from "../../utils/generalStyles";
import Button from "../../components/General/Button";

export default function Ranking({ navigation }) {
  useEffect(() => {
    async function getRankings() {
      const { data } = await api.get(`/ranking`);
    }
    getRankings();
  }, []);

  return (
    <View>
      <Container>
        <InfoContainer>
          <Tittle>Ranking de Jogadores</Tittle>
        </InfoContainer>
      </Container>
    </View>
  );
}
