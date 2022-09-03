import React from "react";
import ReactDOM from "react-dom";
import { Popup } from "../UI";
import styles from "./ImagePopup.module.css";

const emptyCard = { link: "", title: "" };

const ImageView = ({ card, isVisible, onClose }) => {
  const { link, title } = card || emptyCard;

  console.log('IMAGE POPUP');

  return (
    <Popup 
      isVisible={isVisible} 
      onClose={onClose} 
      className={styles.popup}
      overlay={styles.overlay}
    >
      <figure 
        className={styles.popup__figure} 
        aria-labelledby="large_image"
      >
        <img 
          className={styles.popup__image} 
          src={link} 
          alt={title}
        />

        <figcaption 
          id="large_image" 
          className={styles.popup__title}
        >
          {title}
        </figcaption>
      </figure>
    </Popup>
  );
};

export const ImagePopup = React.memo(({ card, isVisible, onClose }) => (
  <>
    { ReactDOM.createPortal(
        <ImageView card={card} isVisible={isVisible} onClose={onClose} />,
        document.getElementById("modal")
    )}
  </>
));
