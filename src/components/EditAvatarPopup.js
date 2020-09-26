import React, {useContext, useEffect, useRef} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

// Редактирование пользователького аватара

function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = props.isOpen ? currentUser.avatar : '';
  }, [currentUser, props.isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateAvatar(inputRef.current.value);
  };

  return (
    <PopupWithForm name="avatar" 
      size="m" submitName={props.submitName} 
      title="Обновить аватар" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input type="url" ref={inputRef}
          id="avatar" name="avatar" 
          pattern="https?://.+" 
          className="popup__item popup__item_type_info" 
          placeholder="Ссылка на картинку" 
          required
        />
        <span 
          className="popup__error" 
          id="avatar-error"
        />
      </label>
    </PopupWithForm>
  );

}

export default EditAvatarPopup;
