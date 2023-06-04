import "./MenuMob.scss";

function MenuMob(props) {
  const {menuOpen, onClose} = props;
  return (
    <div className={`menumob ${menuOpen ? "menumob_opened":""}`}>
      <ul className="menumob__list">
        <li>
          <a>Новости</a>
        </li>
        <li>
          <a>О нас</a>
        </li>
        <li>
          <a>Блог</a>
        </li>
        <li>
          <a>Услуги</a>
        </li>
        <li>
          <a>Контакты</a>
        </li>
      </ul>
      <button type="button"
          className="menumob__close-button"
          onClick={onClose}></button>
    </div>
  );
}

export default MenuMob;
