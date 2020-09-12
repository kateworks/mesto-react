import React from 'react';

function Card({card, onClick}) {

  const handleClick = () => {
    onClick(card);
  }

  return(
    <li className="card">
      <img 
        className="card__image" 
        src={card.link} 
        alt={card.title} 
        onClick={handleClick} />
      <div className="card__description">
        <h2 className="card__title">{card.title}</h2>
        <div className="card__like-group">
          <button className="card__btn card__btn_action_like shaded" 
            title="Нравится">
          </button>
          <span className="card__like-num">{card.likes.length}</span>
        </div>
      </div>
      <button className="card__btn card__btn_action_del shaded"
        title="Удалить">
      </button>
    </li>
  );

}

export default Card;