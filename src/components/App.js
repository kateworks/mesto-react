import React, {useState, useEffect} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import api from '../utils/api';
import profileAvatar from '../images/profile-avatar.jpg';

function App() {
  const [currentUser, setCurrentUser] = useState({
    _id: 0,
    name: 'Екатерина',
    about: '(без доступа в сеть)',
    avatar: profileAvatar,
  });

  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const [profileSubmitName, setProfileSubmitName] = useState('Сохранить');
  const [avatarSubmitName, setAvatarSubmitName] = useState('Сохранить');

  useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      console.log(`Информация о пользователе получена с сервера.`);
      const newUserData = {
        _id: res._id,
        name: res.name, 
        about: res.about,
        avatar: res.avatar
      };
      setCurrentUser(newUserData);
    })
    .catch((err) => {
      console.log(`Невозможно прочитать профиль пользователя. ${err}.`);
    });
  }, []);

  // Обновление информации о пользователе на сервере
  const handleUpdateUser = ({name, info}) => {
    setProfileSubmitName('Сохранение...');
    api.patchUserProfile({name, info})
      .then((res) => {
        console.log(`Информация о пользователе сохранена.`);
        setCurrentUser({...currentUser, name: res.name, about: res.about}); 
      })
      .catch((err) => {
        console.log(`Невозможно сохранить данные на сервере. ${err}.`);
        // Обновляем локальные данные
        setCurrentUser({...currentUser, name, about: info});
      })
      .finally(() => { 
        setEditProfilePopupOpen(false);
        setProfileSubmitName('Сохранить');
      });  
  };

  // Обновление пользовательского аватара на сервере
  const handleUpdateAvatar = (newAvatarLink) => {
    setAvatarSubmitName('Сохранение...');
    api.patchNewAvatar({avatar: newAvatarLink})
    .then((res) => {
      setCurrentUser({...currentUser, avatar: res.avatar});  
    })
    .catch((err) => {
      console.log(`Невозможно обновить аватар на сервере. ${err}.`);
    })
    .finally(() => {
      setEditAvatarPopupOpen(false);
      setAvatarSubmitName('Сохранить');
    });
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={ () => setEditProfilePopupOpen(true) }
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={ () => setEditAvatarPopupOpen(true) }
          onCardClick={ (card) => setSelectedCard(card) }
        />
        <Footer />

        {/* Просмотр фотографии */}
        { 
          selectedCard && 
          <ImagePopup 
            card={selectedCard} 
            onClose={ () => setSelectedCard(null) }
          /> 
        }
        {/* Редактирование профиля пользователя */}
        <EditProfilePopup 
          submitName={profileSubmitName}
          isOpen={isEditProfilePopupOpen} 
          onUpdateUser={handleUpdateUser}
          onClose={() => {setEditProfilePopupOpen(false);}} 
        />

        {/* Обновление аватара пользователя */}
        <EditAvatarPopup 
          submitName={avatarSubmitName}
          isOpen={isEditAvatarPopupOpen} 
          onUpdateAvatar={handleUpdateAvatar}
          onClose={() => {setEditAvatarPopupOpen(false);}} 
        />

        <PopupWithForm name="card" 
          size="l" submitName="Создать" title="Новое место" 
          isOpen={isAddPlacePopupOpen} 
          onClose={() => {setAddPlacePopupOpen(false);}}
        >
          <label className="popup__field">
            <input type="text" id="title" name="title" maxLength="30" minLength="1" 
              className="popup__item popup__item_type_name" 
              placeholder="Название" required/>
            <span className="popup__error" id="title-error" />
          </label>

          <label className="popup__field">
            <input type="url" id="link" name="link" pattern="https?://.+" 
              className="popup__item popup__item_type_info" 
              placeholder="Ссылка на картинку" required/>
            <span className="popup__error" id="link-error" />
          </label>
        </PopupWithForm>

        {/* <PopupWithForm 
          name="confirm" size="s" submitName="Да"
          title="Вы уверены?" 
        /> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
