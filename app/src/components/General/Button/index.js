import React from "react";

import { ButtonContainer, NormalButton, Label } from "./style";

export default function Button({ onClick, label, disabled }) {
  return (
    <ButtonContainer>
      <NormalButton onPress={() => onClick()} disabled={disabled}>
        {label ? <Label disabled={disabled}>{label}</Label> : ""}
      </NormalButton>
    </ButtonContainer>
  );
}
