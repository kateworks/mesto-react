import React from 'react';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
  }

  handleClick = () => {
    this.setState({
      isOpen: false,
    });
    // this.props.onClose();
  }

  render() {
    const openClass = this.state.isOpen ? 'popup_opened' : '';

    return(
      <div className={`popup popup_content_${this.props.name} ${openClass}`}>
      <div className="popup__container">

        <button 
          type="button" 
          className="popup__btn popup__btn_action_close shaded"
          title="Закрыть форму без сохранения данных"
          onClick={this.handleClick}>
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
