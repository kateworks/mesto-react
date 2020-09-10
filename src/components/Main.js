import React from 'react';
import profileAvatar from '../images/profile-avatar.jpg';
import {
  profileData, popupSelectors, 
  popupData, btnEditProfileSelector,
} from '../utils/constants.js';


function Main() {

  function handleEditAvatarClick() {
    // const avatar = userProfile.getUserAvatar();
    // popupChangeAvatar.open({avatar});
    // formChangeAvatarValidation.setInitialState();
    document.querySelector(popupSelectors.changeAvatar).classList.add(popupData.openedClass);
  }

  React.useEffect(() => {

    function handleEditProfileClick() {
      //popupEditProfile.open(userProfile.getUserInfo());
      //formEditProfileValidation.setInitialState();
      document.querySelector(popupSelectors.editProfile).classList.add(popupData.openedClass);
    }

    function handleAddPlaceClick() {

    }

    const btnChangeAvatar = document.querySelector(profileData.avatarSelector);
    const btnEditProfile = document.querySelector(btnEditProfileSelector);

    btnChangeAvatar.addEventListener('click', handleEditAvatarClick);
    btnEditProfile.addEventListener('click', handleEditProfileClick);
    
    
  });


  return(
    <main className="content">
      <section className="profile">

        <div className="profile__avatar">
          <img src={profileAvatar} alt="Аватар профиля" 
            title="Изменить аватар профиля" className="profile__image"/>
        </div>
        
        <div className="profile__description">
          <h1 className="profile__name">Екатерина Пожидаева</h1>
          <button className="profile__btn profile__btn_action_edit shaded"
            title="Редактировать профиль">
          </button>
          <p className="profile__work">Студентка Яндекс.Практикума</p>
        </div>

        <button className="profile__btn profile__btn_action_add shaded"
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
