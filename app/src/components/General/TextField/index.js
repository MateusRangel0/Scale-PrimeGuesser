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
  onSubmitEditing,
}) {
  return (
    <View>
      <Input
        placeholder={placeholder}
        onChangeText={(value) => setInput({ ...input, [inputName]: value })}
        keyboardType={keyboardType}
        width={width}
        onSubmitEditing={onSubmitEditing && onSubmitEditing}
      />
    </View>
  );
}
