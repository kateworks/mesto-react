import React from "react";
import ReactDOM from "react-dom";
import { PopupWithForm } from "..";
import { Input, SubmitButton } from "../UI";
import styles from "./AddPlacePopup.module.css";

const AddPlace = ({ isVisible, onSubmit, onClose }) => {

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
        maxLength="30" minLength="1" 
        placeholder="Название"
        required
      />

      <Input 
        type="url"
        name="place-link"
        pattern="https?://.+"  
        placeholder="Ссылка на картинку"
        required
      />      
    </PopupWithForm>
  );
};


export const AddPlacePopup = ({ isVisible, onSubmit, onClose }) => (
  <>
    { ReactDOM.createPortal(
        <AddPlace isVisible={isVisible} onSubmit={onSubmit} onClose={onClose} />,
        document.getElementById("modal")
    )}
  </>
);
