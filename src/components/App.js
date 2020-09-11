import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);     

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }


  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />

        <PopupWithForm name="profile" 
          size="l" submitName="Сохранить" title="Редактировать профиль" 
          isOpen={isEditProfilePopupOpen} 
          onClose={() => {setEditProfilePopupOpen(false);}}
        >
          <>
            <label className="popup__field">
              <input type="text" id="name" name="name" 
                  maxLength="40" minLength="2" 
                  className="popup__item popup__item_type_name" 
                  placeholder="Имя" required/>
              <span className="popup__error" id="name-error"></span>
            </label>
            <label className="popup__field">
              <input type="text" id="info" name="info" 
                  maxLength="200" minLength="2" 
                  className="popup__item popup__item_type_info" 
                  placeholder="О себе" required/>
              <span className="popup__error" id="info-error"></span>
            </label>
          </>
        </PopupWithForm> 

        <PopupWithForm name="avatar" 
          size="m" submitName="Сохранить" title="Обновить аватар" 
          isOpen={isEditAvatarPopupOpen} 
          onClose={() => {setEditAvatarPopupOpen(false);}}
        >
          <label className="popup__field">
            <input type="url" id="avatar" name="avatar" pattern="https?://.+" 
              className="popup__item popup__item_type_info" 
              placeholder="Ссылка на картинку" required/>
              <span className="popup__error" id="avatar-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name="card" 
          size="l" submitName="Создать" title="Новое место" 
          isOpen={isAddPlacePopupOpen} 
          onClose={() => {setAddPlacePopupOpen(false);}}
        >
          <>
            <label className="popup__field">
              <input type="text" id="title" name="title" maxLength="30" minLength="1" 
                className="popup__item popup__item_type_name" 
                placeholder="Название" required/>
              <span className="popup__error" id="title-error"></span>
            </label>

            <label className="popup__field">
              <input type="url" id="link" name="link" pattern="https?://.+" 
                className="popup__item popup__item_type_info" 
                placeholder="Ссылка на картинку" required/>
              <span className="popup__error" id="link-error"></span>
            </label>
        </>
        </PopupWithForm>

        {/* <PopupWithForm 
          name="confirm" size="s" submitName="Да"
          title="Вы уверены?" 
        /> */}
      </div>

      <template id="card-template">
        <li className="card">
          <img src="#" alt="_" className="card__image"/>
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like-group">
              <button className="card__btn card__btn_action_like shaded" 
                title="Нравится">
              </button>
              <span className="card__like-num">0</span>
            </div>
          </div>
          <button className="card__btn card__btn_action_del shaded"
            title="Удалить">
          </button>
        </li>
      </template>
    </div>
  );
}

export default App;
