import React from "react";
import ReactDOM from "react-dom";
import { PopupWithForm } from "..";
import { Input, SubmitButton } from "../UI";
import styles from "./EditProfilePopup.module.css";

const EditProfile = ({ isVisible, onSubmit, onClose }) => {
  console.log('EDIT PROFILE POPUP');

  const form = { name: "form-profile", title: "Редактировать профиль"};
  const submitButton = <SubmitButton className={styles["button-submit"]}>Сохранить</SubmitButton>;

  return (
    <PopupWithForm 
      isVisible={isVisible} 
      onSubmit={onSubmit} 
      submitButton={submitButton} 
      onClose={onClose} 
      form={form}
    >
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
    </PopupWithForm>
  );
};


export const EditProfilePopup = React.memo(({ isVisible, onSubmit, onClose }) => (
  <>
    { ReactDOM.createPortal(
        <EditProfile isVisible={isVisible} onSubmit={onSubmit} onClose={onClose} />,
        document.getElementById("modal")
    )}
  </>
));

