import React from "react";
import { Card } from "..";
import { classNames } from "../../utils/class-names";
import styles from "./CardsList.module.css";

export const CardsList = ({ cards, onClick, onLike, onDelete, className }) => {

  const renderList = () => cards.map(card => (
    <li key={card.id} className={styles["list__item"]}>
      <Card card={card} onClick={onClick} onLike={onLike} onDelete={onDelete} />
    </li>
  ));

  return (
    <ul className={classNames(styles.list, className)}>
      { renderList() }
    </ul>
  );
};
