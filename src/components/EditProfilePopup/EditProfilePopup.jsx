import React from "react";
import ReactDOM from "react-dom";
import { PopupWithForm } from "..";
import { Input, SaveButton } from "../UI";
import styles from "./EditProfilePopup.module.css";

const EditProfile = ({ isVisible, onSubmit, onClose }) => {

  const form = { name: "form-profile", title: "Редактировать профиль"};

  return (
    <PopupWithForm isVisible={isVisible} form={form} onSubmit={onSubmit} onClose={onClose}>
      <Input 
        name="profile-name"
        maxLength="40" minLength="2" 
        placeholder="Имя"
        required
      />

      <Input 
        name="profile-about" 
        maxLength="200" minLength="2" 
        placeholder="О себе"
        required
      />

      <SaveButton text="Сохранить" onClick={onSubmit} className={styles.form__button}/>
    </PopupWithForm>
  );
};


export const EditProfilePopup = ({ isVisible, onSubmit, onClose }) => (
  <>
    { ReactDOM.createPortal(
        <EditProfile isVisible={isVisible} onSubmit={onSubmit} onClose={onClose} />,
        document.getElementById("modal")
    )}
  </>
);

