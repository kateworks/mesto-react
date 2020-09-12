import React, {useState, useEffect} from 'react';
import Card from './Card';
import api from '../utils/api';
import {initialCards} from '../utils/cards-init';
import profileAvatar from '../images/profile-avatar.jpg';


function Main(props) {
  const [userName, setUserName] = useState('Екатерина Пожидаева');
  const [userDescription, setUserDescription] = useState('Студентка Яндекс.Практикума');
  const [userAvatar, setUserAvatar] = useState(profileAvatar);
  const [userId, setUserId] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      console.log(`Информация о пользователе получена с сервера.`);
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
      setUserId(res._id);
    })
    .catch((err) => {
      console.log(`Невозможно прочитать профиль пользователя. ${err}.`);
    })
    .finally(() => {
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
      })
      .finally(() => {
      });
    
    });
  }, []);

  return(
    <main className="content">
      <section className="profile">

        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img className="profile__image" src={userAvatar} 
            alt="Аватар профиля" title="Изменить аватар профиля"/>
        </div>
        
        <div className="profile__description">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__btn profile__btn_action_edit shaded"
            title="Редактировать профиль" onClick={props.onEditProfile}>
          </button>
          <p className="profile__work">{userDescription}</p>
        </div>

        <button 
          className="profile__btn profile__btn_action_add shaded" 
          onClick={props.onAddPlace} 
          title="Добавить фотографию">
        </button>

      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards.map((card) => (
            <Card onClick={props.onCardClick} card={card}/>
          ))}          
        </ul>  
      </section>
    </main>
  );
};

export default Main;
