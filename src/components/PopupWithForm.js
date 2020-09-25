import React, { useEffect } from 'react';

function PopupWithForm(props) {
  const openClass = props.isOpen && 'popup_opened';

  const handleCloseClick = () => {
    props.onClose();
  };

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) handleCloseClick();
  };

  useEffect(() => {
    const handleEscPress = (evt) => {
      if (evt.key === 'Escape') handleCloseClick();
    };
    
    if (props.isOpen) {
      document.addEventListener('keyup', handleEscPress);
    } else {
      document.removeEventListener('keyup', handleEscPress);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isOpen]);

  return(
    <div 
      className={`popup popup_content_${props.name} ${openClass}`}
      onClick={handleOverlayClick}
    >
    <div className="popup__container">

      <button 
        type="button" 
        className="popup__btn popup__btn_action_close shaded"
        title="Закрыть форму без сохранения данных"
        onClick={handleCloseClick} 
      />

      <form 
        name={props.name}
        className={`popup__form popup__form_size_${props.size}`}
        onSubmit={props.onSubmit} 
      >
          <h3 className="popup__heading">
            {props.title}
          </h3>

          {props.children}

          <button 
            type="submit" value="Создать" 
            className="popup__btn popup__btn_action_submit"
          >
              {props.submitName}
          </button>

      </form>
    </div>
  </div>  
  );
}

export default PopupWithForm;
