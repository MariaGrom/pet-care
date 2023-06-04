import "./PopupWithForm.scss";

function PopupWithForm(props) {
  const { isOpen, onClose, onSubmit } = props;

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <form className={`popup__content popup__form`} onSubmit={onSubmit}>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <h2>Чтобы подобрать план, необходимо&nbsp;заполнить форму ниже</h2>
        <div>
          <h3>У меня</h3>
          <div className="popup__checkbox">
            <label>
              <input type="checkbox" className="invisible-checkbox" />
              <span className="visible-checkbox"></span>
              <span className="form__gender-label">Кошка</span>
            </label>
            <label>
              <input type="checkbox" className="invisible-checkbox" />
              <span className="visible-checkbox"></span>
              <span className="form__gender-label">Собака</span>
            </label>
          </div>
        </div>

        <fieldset className="popup__fields">
          <label className="name">
            <input
              type="text"
              name="name"
              id="name__input"
              placeholder="Имя питомца"
              className="popup__input"
              minLength="2"
              maxLength="40"
            />
            <span className="popup__input-error"></span>
          </label>
          <label className="breed">
            <input
              type="text"
              name="breed"
              id="breed__input"
              placeholder="Порода питомца*"
              className="popup__input"
              required
            />
            <span className="popup__input-error"></span>
          </label>
          <label className="age">
            <input
              type="text"
              name="age"
              id="age__input"
              placeholder="Возраст питомца*"
              className="popup__input"
              required
            />
            <span className="popup__input-error"></span>
          </label>
          <label className="phone">
            <input
              type="text"
              name="phone"
              id="phone__input"
              placeholder="Ваш номер телефона"
              className="popup__input"
            />
            <span className="popup__input-error"></span>
          </label>
          <label className="email">
            <input
              type="text"
              name="email"
              id="email__input"
              placeholder="Ваш email*"
              className="popup__input"
              required
            />
            <span className="popup__input-error"></span>
          </label>
        </fieldset>
        <button type="submit" className="popup__submit-button">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
