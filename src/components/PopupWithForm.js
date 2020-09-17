import React from 'react';

function PopupWithForm(props) {

  const handleCloseClick = () => {
    props.onClose();
  }

  const openClass = props.isOpen && 'popup_opened';

  return(
    <div className={`popup popup_content_${props.name} ${openClass}`}>
    <div className="popup__container">

      <button 
        type="button" 
        className="popup__btn popup__btn_action_close shaded"
        title="Закрыть форму без сохранения данных"
        onClick={handleCloseClick} 
      />

      <form 
        className={`popup__form popup__form_size_${props.size}`} 
        name={props.name}>

          <h3 className="popup__heading">{props.title}</h3>

          {props.children}

          <button 
            type="submit" value="Создать" 
            className="popup__btn popup__btn_action_submit">
              {props.submitName}
          </button>

      </form>
    </div>
  </div>  
  );
}

export default PopupWithForm;
