import React, { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [inputValues, setInputValues] = useState({
    name: currentUser.name,
    info: currentUser.about,
  });

  useEffect(() => {
    if (props.isOpen) {
      setInputValues({ name: currentUser.name, info: currentUser.about});
    } else {
      setInputValues({ name: '', info: ''});
    }
  }, [currentUser, props.isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateUser(inputValues);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputValues({...inputValues, [name]: value});
  };

  return (
    <PopupWithForm name="profile" 
      size="l" submitName={props.submitName} 
      title="Редактировать профиль" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input type="text" 
          id="name" name="name" 
          className="popup__item popup__item_type_name" 
          maxLength="40" minLength="2" 
          placeholder="Имя" required
          value={inputValues.name}
          onChange={handleChange}
        />
        <span className="popup__error" id="name-error" />
      </label>

      <label className="popup__field">
        <input type="text" 
          id="info" name="info" 
          className="popup__item popup__item_type_info" 
          maxLength="200" minLength="2" 
          placeholder="О себе" required
          value={inputValues.info}
          onChange={handleChange}
        />
        <span className="popup__error" id="info-error" />
      </label>
    </PopupWithForm> 
  );
}

export default EditProfilePopup;
