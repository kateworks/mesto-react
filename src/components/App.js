import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        {/* Всплывающее окно редактирования профиля */}
        <div className="popup popup_content_profile">
          <div className="popup__container">
            <button type="button" className="popup__btn popup__btn_action_close shaded"
              title="Закрыть форму без сохранения данных">
            </button>
            <form className="popup__form popup__form_size_l" name="edit-profile">
              <h3 className="popup__heading">Редактировать профиль</h3>
              <label className="popup__field">
                <input type="text" id="name" name="name" 
                    maxLength="40" minLength="2" 
                    className="popup__item popup__item_type_name" 
                    placeholder="Имя" required/>
                <span className="popup__error" id="name-error"></span>
              </label>
              <label className="popup__field">
                <input type="text" id="info" name="info" 
                    maxLength="200" minLength="2" 
                    className="popup__item popup__item_type_info" 
                    placeholder="О себе" required/>
                <span className="popup__error" id="info-error"></span>
              </label>
              <button type="submit" value="Сохранить" 
                className="popup__btn popup__btn_action_submit">
                  Сохранить  
              </button>
            </form>
          </div>
        </div>

        {/* Всплывающее окно изменения аватара */}
        <div className="popup popup_content_avatar">
          <div className="popup__container">
            <button type="button" className="popup__btn popup__btn_action_close shaded"
              title="Закрыть форму без сохранения данных">
            </button>
            <form className="popup__form popup__form_size_m" name="edit-profile">
              <h3 className="popup__heading">Обновить аватар</h3>

              <label className="popup__field">
                <input type="url" id="avatar" name="avatar" pattern="https?://.+" 
                  className="popup__item popup__item_type_info" 
                  placeholder="Ссылка на картинку" required/>
                  <span className="popup__error" id="avatar-error"></span>
              </label>

              <button type="submit" value="Сохранить" 
                className="popup__btn popup__btn_action_submit">
                  Сохранить  
              </button>
            </form>
          </div>
        </div>

        {/* Всплывающее окно добавления фотографии */}    
        <div className="popup popup_content_card">
          <div className="popup__container">
            <button type="button" className="popup__btn popup__btn_action_close shaded"
              title="Закрыть форму без сохранения данных">
            </button>
            <form className="popup__form popup__form_size_l" name="add-place">
              <h3 className="popup__heading">Новое место</h3>

              <label className="popup__field">
                <input type="text" id="title" name="title" maxLength="30" minLength="1" 
                  className="popup__item popup__item_type_name" 
                  placeholder="Название" required/>
                <span className="popup__error" id="title-error"></span>
              </label>

              <label className="popup__field">
                <input type="url" id="link" name="link" pattern="https?://.+" 
                  className="popup__item popup__item_type_info" 
                  placeholder="Ссылка на картинку" required/>
                  <span className="popup__error" id="link-error"></span>
              </label>
              
              <button type="submit" value="Создать" 
                className="popup__btn popup__btn_action_submit">
                  Создать
              </button>
            </form>
          </div>
        </div>

        {/* Всплывающее окно просмотра фотографии    */}
        <div className="popup popup_content_image">
          <div className="popup__image-box">
            <button type="button" className="popup__btn popup__btn_action_close shaded"
              title="Закрыть окно просмотра">
            </button>

            <figure className="popup__figure">
              <img src="#" className="popup__image" alt="Image"/>
              <figcaption className="popup__image-caption">Image Caption</figcaption>
            </figure>
          </div>
        </div>

        {/* Всплывающее окно подтверждения      */}
        <div className="popup popup_content_confirm">
          <div className="popup__container">
            <button type="button" className="popup__btn popup__btn_action_close shaded"
              title="Закрыть окно без подтверждения">
            </button>
            <form className="popup__form popup__form_size_s" name="confirm">
              <h3 className="popup__heading">Вы уверены?</h3>
              <button type="submit" value="Да" 
                className="popup__btn popup__btn_action_submit">
                  Да  
              </button>
            </form>
          </div>
        </div>
      </div>

      <template id="card-template">
        <li className="card">
          <img src="#" alt="_" className="card__image"/>
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like-group">
              <button className="card__btn card__btn_action_like shaded" 
                title="Нравится">
              </button>
              <span className="card__like-num">0</span>
            </div>
          </div>
          <button className="card__btn card__btn_action_del shaded"
            title="Удалить">
          </button>
        </li>
      </template>

    </div>
  );
}

export default App;
