import React, { useState } from "react";
import { Header, Footer, CardsList, Profile, EditProfilePopup } from "..";
import styles from "./App.module.css";
import { initialCards } from "../../utils/cards-init";

export const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfileVisible(true);
  };

  const handleEditProfileClose = () => {
    setIsEditProfileVisible(false);
  };

  const handleClick = (card) => {
    console.log(card);
  };

  const handleLike = (card) => {
    console.log(card);
  };

  return (
    <div className={styles.page}>
      <Header className={styles.page__margin} />
      <main>
        <Profile onEditProfileClick={handleEditProfileClick}/>
        <CardsList 
          cards={cards}
          className={styles.page__list}
          onClick={handleClick}
          onLike={handleLike}
        />
      </main>
      <Footer className={styles.page__margin} />

      <EditProfilePopup isVisible={isEditProfileVisible} onClose={handleEditProfileClose}/>
    </div>
  );
};