import React from 'react';
import PopupWithForm from './PopupWithForm';

// Всплывающее окно подтверждения действия

function ConfirmPopup(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onConfirm(props.card);
  };

  return(
    <PopupWithForm 
      name="confirm" 
      size="s" submitName={props.submitName}
      title="Вы уверены?"
      isOpen={props.card} 
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmPopup;