// libs
import React from "react";
import { Button } from "react-native";
import Modal from "react-native-modal";

// styles
import { ModalBody, Label } from "./style";

export default function ErrorModal({ isVisible, label, onClose, buttonLabel }) {
  return (
    <Modal isVisible={isVisible}>
      <ModalBody>
        <Label>{label}</Label>

        <Button title={buttonLabel} onPress={onClose} />
      </ModalBody>
    </Modal>
  );
}
