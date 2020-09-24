import React, { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [info, setInfo] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name);
    setInfo(currentUser.about);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateUser({ name, info });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  const handleClose = () => {
    props.onClose();
    setName(currentUser.name);
    setInfo(currentUser.about);
  };

  return (
    <PopupWithForm name="profile" 
      size="l" submitName={props.submitName} 
      title="Редактировать профиль" 
      isOpen={props.isOpen} 
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input type="text" 
          id="name" name="name" 
          className="popup__item popup__item_type_name" 
          maxLength="40" minLength="2" 
          placeholder="Имя" required
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="name-error" />
      </label>

      <label className="popup__field">
        <input type="text" 
          id="info" name="info" 
          className="popup__item popup__item_type_info" 
          maxLength="200" minLength="2" 
          placeholder="О себе" required
          value={info}
          onChange={handleInfoChange}
        />
        <span className="popup__error" id="info-error" />
      </label>
    </PopupWithForm> 
  );
}

export default EditProfilePopup;
