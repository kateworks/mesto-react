import React from 'react';

function ImagePopup() {
  return(
    <div className="popup popup_content_image">
      <div className="popup__image-box">
        <button 
          type="button" 
          className="popup__btn popup__btn_action_close shaded"
          title="Закрыть окно просмотра">
        </button>

        <figure className="popup__figure">
          <img src="#" className="popup__image" alt="Image"/>
          <figcaption className="popup__image-caption">
            Image Caption
          </figcaption>
        </figure>
      </div>
    </div>

  );
}

export default ImagePopup;