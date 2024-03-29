import React, { useState, useCallback } from "react";
import { Header, Footer, CardsList, Profile } from "..";
import { EditProfilePopup, AddPlacePopup, EditAvatarPopup, ConfirmPopup, ImagePopup  } from "..";
import styles from "./App.module.css";
import { initialCards } from "../../utils/cards-init";

export const App = () => {
  const [cards] = useState(initialCards);
  const [selectedCard, setSelectedCard] = useState(null);  
  const [arePopupsVisible, setArePopupsVisible] = useState({
    "edit-profile": false,
    "add-place": false,
    "edit-avatar": false,
    "view-image" : false,
  });

  const handleEditProfileClick = useCallback(() => {
    setArePopupsVisible(value => ({ ...value, "edit-profile": true }));
  }, []);

  const handleEditProfileClose = useCallback(() => {
    setArePopupsVisible(value => ({ ...value, "edit-profile": false }));
  }, []);

  const handleAddPlaceClick = useCallback(() => {
    setArePopupsVisible(value => ({ ...value, "add-place": true }));
  }, []);

  const handleAddPlaceClose = useCallback(() => {
    setArePopupsVisible(value => ({ ...value, "add-place": false }));
  }, []);

  const handleEditAvatarClick = useCallback(() => {
    setArePopupsVisible(value => ({ ...value, "edit-avatar": true }));
  }, []);

  const handleEditAvatarClose = useCallback(() => {
    setArePopupsVisible(value => ({ ...value, "edit-avatar": false }));
  }, []);

  const handleClick = (card) => {
    setSelectedCard(card);
    setArePopupsVisible(value => ({ ...value, "view-image": true }));
  };

  const handleImagePopupClose = useCallback(() => {
    setArePopupsVisible(value => ({ ...value, "view-image": false }));
    // setSelectedCard(null);
  }, []);

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
          onEditAvatarClick={handleEditAvatarClick}
        />
        <CardsList 
          cards={cards}
          className={styles.page__list}
          onClick={handleClick}
          onLike={handleLike}
        />
      </main>
      <Footer className={styles.page__margin} />

      <EditProfilePopup isVisible={arePopupsVisible["edit-profile"]} onClose={handleEditProfileClose}/>
      <AddPlacePopup isVisible={arePopupsVisible["add-place"]} onClose={handleAddPlaceClose}/>
      <EditAvatarPopup isVisible={arePopupsVisible["edit-avatar"]} onClose={handleEditAvatarClose}/>
      <ConfirmPopup isVisible={false}/>
      
      <ImagePopup 
        card={selectedCard}
        isVisible={arePopupsVisible["view-image"]} 
        onClose={handleImagePopupClose} 
      />
    </div>
  );
};