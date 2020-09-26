import React, {useRef, useEffect} from 'react';
import PopupWithForm from './PopupWithForm';

// Добавление карточки

function AddPlacePopup(props) {
  const titleRef = useRef();
  const linkRef = useRef();

  useEffect(() => {
    titleRef.current.value = '';
    linkRef.current.value = '';
  }, [props.isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace(titleRef.current.value, linkRef.current.value);
  };

  return (
    <PopupWithForm name="card" 
      size="l" submitName={props.submitName} 
      title="Новое место" 
      isOpen={props.isOpen} 
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input type="text" ref={titleRef}
          id="title" name="title" 
          maxLength="30" minLength="1" 
          className="popup__item popup__item_type_name" 
          placeholder="Название" 
          required
        />
        <span 
          className="popup__error" 
          id="title-error"
        />
      </label>

      <label className="popup__field">
        <input type="url" ref={linkRef}
          id="link" name="link" 
          pattern="https?://.+" 
          className="popup__item popup__item_type_info" 
          placeholder="Ссылка на картинку" 
          required
        />
        <span 
          className="popup__error" 
          id="link-error"
        />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;