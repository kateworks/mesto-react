import React from 'react';

function ImagePopup({card, onClose}) {

  const handleCloseClick = () => {
    onClose();
  }

  const openClass = card && 'popup_opened';

  return(
    <div className={`popup popup_content_image ${openClass}`}>
      <div className="popup__image-box">
        <button 
          type="button" 
          className="popup__btn popup__btn_action_close shaded"
          title="Закрыть окно просмотра"
          onClick={handleCloseClick} 
        />

        <figure className="popup__figure">
          <img 
            src={card ? card.link : '#'} 
            className="popup__image" 
            alt={card ? card.title : 'title'}
          />
          <figcaption className="popup__image-caption">
            {card ? card.title : 'caption'}
          </figcaption>
        </figure>
      </div>
    </div>

  );
}

export default ImagePopup;