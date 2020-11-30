import React from "react";

import { ButtonContainer, NormalButton, Label } from "./style";

export default function Button({ onClick, label, disabled, isStart }) {
  return (
    <ButtonContainer isStart={isStart}>
      <NormalButton
        onPress={() => onClick()}
        disabled={disabled}
        isStart={isStart}
      >
        {label ? (
          <Label disabled={disabled} isStart={isStart}>
            {label}
          </Label>
        ) : (
          ""
        )}
      </NormalButton>
    </ButtonContainer>
  );
}
