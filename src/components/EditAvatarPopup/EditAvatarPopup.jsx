import React from "react";
import ReactDOM from "react-dom";
import { PopupWithForm } from "..";
import { Input, SubmitButton } from "../UI";
import styles from "./EditAvatarPopup.module.css";

const EditAvatar = ({ isVisible, onSubmit, onClose }) => {
  console.log('EDIT AVATAR POPUP');

  const form = { name: "form-avatar", title: "Обновить аватар"};
  const submitButton = <SubmitButton className={styles.popup__button}>Сохранить</SubmitButton>;

  return (
    <PopupWithForm 
      isVisible={isVisible} 
      onSubmit={onSubmit} 
      submitButton={submitButton} 
      onClose={onClose} 
      form={form}
      className={styles.popup}
    >
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


export const EditAvatarPopup = React.memo(({ isVisible, onSubmit, onClose }) => (
  <>
    { ReactDOM.createPortal(
        <EditAvatar isVisible={isVisible} onSubmit={onSubmit} onClose={onClose} />,
        document.getElementById("modal")
    )}
  </>
));
