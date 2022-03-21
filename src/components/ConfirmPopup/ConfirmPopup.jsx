import React from "react";
import ReactDOM from "react-dom";
import { PopupWithForm } from "..";
import { SubmitButton } from "../UI";
import styles from "./ConfirmPopup.module.css";

const Confirm = ({ isVisible, onSubmit, onClose }) => {

  const form = { name: "form-confirm", title: "Вы уверены?"};
  const submitButton = <SubmitButton className={styles.popup__button}>Да</SubmitButton>;

  return (
    <PopupWithForm 
      isVisible={isVisible} 
      onSubmit={onSubmit} 
      submitButton={submitButton} 
      onClose={onClose} 
      form={form}
      className={styles.popup}
    />
  );
};


export const ConfirmPopup = ({ isVisible, onSubmit, onClose }) => (
  <>
    { ReactDOM.createPortal(
        <Confirm isVisible={isVisible} onSubmit={onSubmit} onClose={onClose} />,
        document.getElementById("modal")
    )}
  </>
);
