import React, { useState, useCallback } from "react";
import { Header, Footer, CardsList, Profile } from "..";
import { EditProfilePopup, AddPlacePopup } from "..";
import styles from "./App.module.css";
import { initialCards } from "../../utils/cards-init";

export const App = () => {
  const [cards] = useState(initialCards);
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const [isAddPlaceVisible, setIsAddPlaceVisible] = useState(false);

  const handleEditProfileClick = useCallback(() => {
    setIsEditProfileVisible(true);
  }, []);

  const handleEditProfileClose = useCallback(() => {
    setIsEditProfileVisible(false);
  }, []);

  const handleAddPlaceClick = useCallback(() => {
    setIsAddPlaceVisible(true);
  }, []);

  const handleAddPlaceClose = useCallback(() => {
    setIsAddPlaceVisible(false);
  }, []);

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
        <Profile 
          onEditProfileClick={handleEditProfileClick} 
          onAddPlaceClick={handleAddPlaceClick}
        />
        <CardsList 
          cards={cards}
          className={styles.page__list}
          onClick={handleClick}
          onLike={handleLike}
        />
      </main>
      <Footer className={styles.page__margin} />

      <EditProfilePopup isVisible={isEditProfileVisible} onClose={handleEditProfileClose}/>
      <AddPlacePopup isVisible={isAddPlaceVisible} onClose={handleAddPlaceClose}/>
    </div>
  );
};