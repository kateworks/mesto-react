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

  return(
    <main className="content">
      <section className="profile">

        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img className="profile__image" src={currentUser.avatar} 
            alt="Аватар профиля" title="Изменить аватар профиля"/>
        </div>
        
        <div className="profile__description">
          <h1 className="profile__name">{currentUser.name}</h1>
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
            <Card onClick={props.onCardClick} card={card} key={card.id}/>
          ))}          
        </ul>  
      </section>
    </main>
  );
}

export default Main;
