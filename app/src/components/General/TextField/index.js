import React from "react";
import { View } from "react-native";

import { Input } from "./style";

export default function TextField({
  placeholder,
  keyboardType,
  inputName,
  input,
  setInput,
  width,
}) {
  return (
    <View>
      <Input
        placeholder={placeholder}
        onChangeText={(value) => setInput({ ...input, [inputName]: value })}
        keyboardType={keyboardType}
        width={width}
      />
    </View>
  );
}
