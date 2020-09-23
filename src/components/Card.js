import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onClick}) {
  const currentUser = useContext(CurrentUserContext);
  const [isOwned] = useState(card.owner === currentUser._id);
  const [isLiked] = useState(card.likes.some(
    likeOwner => likeOwner._id === currentUser._id
  ));

  const handleClick = () => {
    onClick(card);
  }

  return(
    <li className="card">
      <img 
        className="card__image" 
        src={card.link} 
        alt={card.title} 
        onClick={handleClick} 
      />
      <div className="card__description">
        <h2 className="card__title">{card.title}</h2>
        <div className="card__like-group">
          <button className="card__btn card__btn_action_like shaded" 
            title="Нравится" />
          <span className="card__like-num">{card.likes.length}</span>
        </div>
      </div>

      <button 
        className="card__btn card__btn_action_del shaded" 
        disabled={!isOwned} hidden={!isOwned}
        title="Удалить"
      />
    </li>
  );

}

export default Card;