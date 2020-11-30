import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./views/Home";
import Game from "./views/Game";
import Ranking from "./views/Ranking";
import Result from "./views/Result";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{ title: "", headerTransparent: true }}
        />
        <Screen
          name="GameClues"
          component={Game}
          options={{ title: "", headerTransparent: true }}
        />
        <Screen
          name="Ranking"
          component={Ranking}
          options={{ title: "", headerTransparent: true }}
        />
        <Screen
          name="Result"
          component={Result}
          options={{ title: "", headerTransparent: true }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
