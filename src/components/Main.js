import React from 'react';
import profileAvatar from '../images/profile-avatar.jpg';


function Main(props) {

  return(
    <main className="content">
      <section className="profile">

        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img className="profile__image" src={profileAvatar} 
            alt="Аватар профиля" title="Изменить аватар профиля"/>
        </div>
        
        <div className="profile__description">
          <h1 className="profile__name">Екатерина Пожидаева</h1>
          <button className="profile__btn profile__btn_action_edit shaded"
            title="Редактировать профиль" onClick={props.onEditProfile}>
          </button>
          <p className="profile__work">Студентка Яндекс.Практикума</p>
        </div>

        <button 
          className="profile__btn profile__btn_action_add shaded" 
          onClick={props.onAddPlace} 
          title="Добавить фотографию">
        </button>

      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list"></ul>  
      </section>
    </main>
  );
};

export default Main;
