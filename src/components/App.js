import React, {useState, useEffect} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import api from '../utils/api';
import profileAvatar from '../images/profile-avatar.jpg';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Екатерина',
    about: '(без доступа в сеть)',
    avatar: profileAvatar,
    _id: 0,
  });

  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false); 
  const [profileSubmitName, setProfileSubmitName] = useState('Сохранить');

  useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      console.log(`Информация о пользователе получена с сервера.`);
      setCurrentUser(res); //{_id, name, about, avatar}
    })
    .catch((err) => {
      console.log(`Невозможно прочитать профиль пользователя. ${err}.`);
    });
  }, []);

  const handleUpdateUser = ({name, info}) => {
    setProfileSubmitName('Сохранение...');
    api.patchUserProfile({name, info})
      .then((res) => {
        console.log(`Информация о пользователе сохранена.`);
        setCurrentUser(res); //{_id, name, about, avatar}  
      })
      .catch((err) => {
        console.log(`Невозможно сохранить данные на сервере. ${err}.`);
        setCurrentUser({...currentUser, name, about: info});
      })
      .finally(() => { 
        setEditProfilePopupOpen(false);
        setProfileSubmitName('Сохранить');
      });  
  };

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={ () => setEditProfilePopupOpen(true) }
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
          onCardClick={ (card) => {handleCardClick(card); }}
        />
        <Footer />

        { selectedCard && <ImagePopup card={selectedCard} 
          onClose={ () => setSelectedCard(null) }/> }

        {/* Редактирование профиля пользователя */}
        <EditProfilePopup 
          submitName={profileSubmitName}
          isOpen={isEditProfilePopupOpen} 
          onUpdateUser={handleUpdateUser}
          onClose={() => {setEditProfilePopupOpen(false);}} 
        />

        <PopupWithForm name="avatar" 
          size="m" submitName="Сохранить" title="Обновить аватар" 
          isOpen={isEditAvatarPopupOpen} 
          onClose={() => {setEditAvatarPopupOpen(false);}}
        >
          <label className="popup__field">
            <input type="url" id="avatar" name="avatar" pattern="https?://.+" 
              className="popup__item popup__item_type_info" 
              placeholder="Ссылка на картинку" required/>
              <span className="popup__error" id="avatar-error"/>
          </label>
        </PopupWithForm>

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
