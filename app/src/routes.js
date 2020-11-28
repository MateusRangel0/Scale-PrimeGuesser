import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./views/Home";

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
      </Navigator>
    </NavigationContainer>
  );
}
