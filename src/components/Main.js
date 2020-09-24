import React, {useState, useEffect, useContext} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';
import api from '../utils/api';

import {initialCards} from '../utils/cards-init';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      console.log(`Информация о карточках получена с сервера.`);
      setCards(res.map(item => {
        return {
          title: item.name, 
          link: item.link, 
          likes: item.likes, 
          owner: item.owner._id,
          id: item._id
        };
      }));
    })
    .catch((err) => {
      console.log(`Невозможно получить карточки с сервера. ${err}.`);
      setCards(initialCards);
    });
  }, []);

  const handleCardLike = (card) => {
    const isLiked = (card.likes.some(
      likeAuthor => likeAuthor._id === currentUser._id
    ));
    const likeAction = isLiked ? 'удалить' : 'поставить';
    const likeFunc = isLiked ? id => api.unlikeCard(id) : id => api.likeCard(id);
    let changedCard = {};

    // Ставим или удаляем лайк в зависимости от его текущего состояния
    likeFunc(card.id)
      .then((res) => {
        // Если запрос выполнен успешно, создаем новую карточку
        changedCard = {
          title: res.name, 
          link: res.link, 
          likes: res.likes, 
          owner: res.owner._id,
          id: res._id
        };
      })
      .catch((err) => {
        console.log(`Невозможно ${likeAction} лайк. Ошибка ${err}.`);
        // Если сервер недоступен, работаем с локальным пользователем,
        // добавляя (или удаляя его данные из массива likes)
        const likesArray = isLiked ? [] : [ currentUser ];
        changedCard = { ...card, likes: likesArray, };
      })
      .finally(() => {
        // Выполняем замену карточки
        const newCards = cards.map((currentCard) => (
          currentCard.id === card.id ? changedCard : currentCard
        ));
        // Обновляем состояние 
        setCards(newCards);
      });
  };

  // Удаление карточки
  const handleCardDelete = (card) => {
    api.deleteCard(card.id)
      .then((res) => {
        // Исключаем из массива удаленную карточку
        const newCards = cards.filter((currentCard) => (
          currentCard.id !== card.id
        ));
        // Обновляем состояние 
        setCards(newCards);
        console.log(`Карточка ${card.id} удалена.`); 
      })
      .catch((err) => {
        console.log(`Невозможно удалить карточку. Ошибка ${err}.`);
      });
  };

  return(
    <main className="content">
      <section className="profile">

        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img 
            src={currentUser.avatar} 
            className="profile__image" 
            alt="Аватар профиля" 
            title="Изменить аватар профиля"
          />
        </div>
        
        <div className="profile__description">
          <h1 className="profile__name">
            {currentUser.name}
          </h1>
          <button 
            className="profile__btn profile__btn_action_edit shaded"
            title="Редактировать профиль" 
            onClick={props.onEditProfile} 
          />
          <p className="profile__work">{currentUser.about}</p>
        </div>

        <button 
          className="profile__btn profile__btn_action_add shaded" 
          onClick={props.onAddPlace} 
          title="Добавить фотографию" 
        />
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards.map((card) => (
            <Card key={card.id}
              card={card} 
              onClick={props.onCardClick}
              onLike={handleCardLike}
              onDelete={handleCardDelete}
            />
          ))}          
        </ul>  
      </section>
    </main>
  );
}

export default Main;
