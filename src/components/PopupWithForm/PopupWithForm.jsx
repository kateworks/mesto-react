import React, { useEffect, useCallback } from "react";
import { Overlay, CloseButton } from "../UI";
import { classNames } from "../../utils/class-names";
import styles from "./PopupWithForm.module.css";

export const PopupWithForm = ({ isVisible, onSubmit, onClose, form, children }) => {

  const overlayClass = classNames(styles.overlay, isVisible && styles.overlay_visible);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [isVisible]);

  useEffect(() => {
    const handleEscPress = (event) => {
      if (event.key === 'Escape') onClose();
    };
    
    if (isVisible) {
      document.addEventListener('keyup', handleEscPress);
    } else {
      document.removeEventListener('keyup', handleEscPress);
    };
  }, [isVisible, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };  

  return (
    <Overlay className={overlayClass} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <CloseButton className={styles.popup__button} onClick={onClose}/>

        <form name={form.name} className={styles.popup__form} onSubmit={onSubmit}> 
          <h3 className={styles.popup__title}>{form.title}</h3>
          {children}
        </form>
      </div>
    </Overlay>
  );
};
