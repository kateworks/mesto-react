import React, { useEffect, useCallback } from "react";
import { Overlay, CloseButton } from "..";
import { classNames } from "../../../utils/class-names";
import styles from "./Popup.module.css";

export const Popup = ({ isVisible, onClose, children, className, overlay="" }) => {

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

  const overlayClass = classNames(styles.popup, overlay, isVisible && styles.popup_visible);

  return (
    <Overlay className={overlayClass} onClick={handleOverlayClick}>
      <div className={className}>
        <CloseButton className={styles.popup__button} onClick={onClose}/>
        {children}
      </div>
    </Overlay>
  );
};
