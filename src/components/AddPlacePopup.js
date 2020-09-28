import React, {useState, useEffect} from 'react';
import PopupWithForm from './PopupWithForm';

// Добавление карточки

function AddPlacePopup(props) {
  const [inputValues, setInputValues] = useState({ 
    title: '',
    link: '',
  });

  useEffect(() => {
    setInputValues({ title: '', link: ''});
  }, [props.isOpen]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputValues({...inputValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace(inputValues);
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
        <input type="text"
          id="title" name="title" 
          maxLength="30" minLength="1" 
          className="popup__item popup__item_type_name" 
          placeholder="Название" 
          required
          value={inputValues.title}
          onChange={handleChange}
        />
        <span 
          className="popup__error" 
          id="title-error"
        />
      </label>

      <label className="popup__field">
        <input type="url"
          id="link" name="link" 
          pattern="https?://.+" 
          className="popup__item popup__item_type_info" 
          placeholder="Ссылка на картинку" 
          required
          value={inputValues.link}
          onChange={handleChange}
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