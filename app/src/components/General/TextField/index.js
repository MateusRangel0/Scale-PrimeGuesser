import React from "react";
import { View } from "react-native";

import { Input } from "./style";

export default function TextField({ placeholder, setInputs }) {
  return (
    <View>
      <Input
        placeholder={placeholder}
        onChangeText={(name) => setInputs({ playerName: name })}
      />
    </View>
  );
}
