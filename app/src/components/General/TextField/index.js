import React from "react";
import { View } from "react-native";

import { Input } from "./style";

export default function TextField({ placeholder, setName }) {
  return (
    <View>
      <Input placeholder={placeholder} onChangeText={(name) => setName(name)} />
    </View>
  );
}
