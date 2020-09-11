import React from 'react';

function Card({card}) {

  return(
    <li className="card" key={card.id}>
      <img src={card.link} alt={card.title} className="card__image"/>
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