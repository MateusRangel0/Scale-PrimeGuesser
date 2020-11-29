import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./views/Home";
import GameClues from "./views/GameClues";
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
        <Screen
          name="GameClues"
          component={GameClues}
          options={{ title: "Pistas" }}
        />
        <Screen
          name="Ranking"
          component={Ranking}
          options={{ title: "Ranking" }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
