import React, { useEffect, useCallback } from "react";
import { Overlay, CloseButton, Form } from "../UI";
import { classNames } from "../../utils/class-names";
import styles from "./PopupWithForm.module.css";

export const PopupWithForm = ({ isVisible, onSubmit, submitButton, onClose, form, children, className }) => {

  const handleEscPress = useCallback((event) => {
    if (event.key === 'Escape') onClose();
  }, [onClose]);

  const handleOverlayClick = useCallback((event) => {
    if (event.target === event.currentTarget) onClose();
  }, [onClose]);  

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [isVisible]);

  useEffect(() => {    
    if (isVisible) {
      document.addEventListener('keyup', handleEscPress);
    } else {
      document.removeEventListener('keyup', handleEscPress);
    };
  }, [isVisible, handleEscPress]);

  const overlayClass = classNames(styles.overlay, isVisible && styles.overlay_visible);

  return (
    <Overlay className={overlayClass} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <CloseButton className={styles.popup__button} onClick={onClose}/>
        <Form form={form} onSubmit={onSubmit} submitButton={submitButton} className={styles.popup__form}>
          {children}
        </Form>
      </div>
    </Overlay>
  );
};
