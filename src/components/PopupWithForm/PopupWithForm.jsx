import React from "react";
import { Popup, Form } from "../UI";
import { classNames } from "../../utils/class-names";
import styles from "./PopupWithForm.module.css";

export const PopupWithForm = ({ isVisible, onSubmit, submitButton, onClose, form, children, className }) => {

  const popupClass = classNames(styles.popup, className);

  return (
    <Popup 
      isVisible={isVisible} 
      onClose={onClose} 
      className={popupClass}
    >
      <Form 
        form={form} 
        onSubmit={onSubmit} 
        submitButton={submitButton} 
        className={styles.popup__form}
      >
        {children}
      </Form>
    </Popup>
  );
};
