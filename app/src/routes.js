import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./views/Home";
import Game from "./views/Game";
import Ranking from "./views/Ranking";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{ title: "Prime Guesser!" }}
        />
        <Screen name="GameClues" component={Game} options={{ title: "Jogo" }} />
        <Screen
          name="Ranking"
          component={Ranking}
          options={{ title: "Ranking" }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
