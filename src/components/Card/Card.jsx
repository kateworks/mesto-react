import React from "react";
import { LikeButton } from "../UI";
import { classNames } from "../../utils/class-names";
import styles from "./Card.module.css";

export const Card = ({ card, onClick, onLike, onDelete, className }) => {

  const handleClick = () => {
    console.log(card);
    onClick(card);
  };

  const handleLike = () => {
    console.log("Like " + card.id);
    onLike(card);
  };

  return (
    <article className={classNames(styles.card, className)}>
      <img className={styles.card__image} src={card.link} alt={card.title} onClick={handleClick} />      

      <div className={styles.card__description}>
        <h2 className={styles.card__title}>{card.title}</h2>
        <div className={styles["card__like-group"]}>
          <LikeButton isLiked={card.likes.length} onClick={handleLike} title="Нравится"/>
          {/* <span className="card__like-num">
            {card.likes.length}
          </span> */}
        </div>
      </div>
    </article>
  );
};
