import React from 'react';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {

    return(
      <div className={`popup popup_content_${this.props.name}`}>
      <div className="popup__container">

        <button 
          type="button" 
          className="popup__btn popup__btn_action_close shaded"
          title="Закрыть форму без сохранения данных">
        </button>

        <form 
          className={`popup__form popup__form_size_${this.props.size}`} 
          name={this.props.name}>

            <h3 className="popup__heading">{this.props.title}</h3>

            {this.props.children}

            <button 
              type="submit" value="Создать" 
              className="popup__btn popup__btn_action_submit">
                {this.props.submitName}
            </button>

        </form>
      </div>
    </div>  
    );
  }
}

export default PopupWithForm;
