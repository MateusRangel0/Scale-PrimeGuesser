import React from "react";

import { ButtonContainer, NormalButton, Label } from "./style";

export default function Button({ onClick, label }) {
  return (
    <ButtonContainer>
      <NormalButton onPress={() => onClick()}>
        {label ? <Label>{label}</Label> : ""}
      </NormalButton>
    </ButtonContainer>
  );
}
