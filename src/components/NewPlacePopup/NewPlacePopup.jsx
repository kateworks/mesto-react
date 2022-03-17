import React from "react";
import ReactDOM from "react-dom";
import { PopupWithForm } from "..";
import { Input, SubmitButton } from "../UI";
import styles from "./NewPlacePopup.module.css";

const NewPlace = ({ isVisible, onSubmit, onClose }) => {

  const form = { name: "form-place", title: "Новое место"};
  const submitButton = <SubmitButton className={styles["button-submit"]}>Создать</SubmitButton>;

  return (
    <PopupWithForm 
      isVisible={isVisible} 
      onSubmit={onSubmit} 
      submitButton={submitButton} 
      onClose={onClose} 
      form={form}
    >
      <Input 
        name="place-name"
        maxLength="40" minLength="2" 
        placeholder="Название"
        required
      />

      <Input 
        name="place-link" 
        maxLength="200" minLength="2" 
        placeholder="Ссылка на картинку"
        required
      />      
    </PopupWithForm>
  );
};


export const NewPlacePopup = ({ isVisible, onSubmit, onClose }) => (
  <>
    { ReactDOM.createPortal(
        <NewPlace isVisible={isVisible} onSubmit={onSubmit} onClose={onClose} />,
        document.getElementById("modal")
    )}
  </>
);
