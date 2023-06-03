import "./CardInfo.scss";
import CheckIcon from "../../images/check.svg";

function CardInfo() {
  return (
    <div className="cardInfo back">
      <div className="cardInfo__info">
        <div>
        <h2>Онлайн-консультация с терапевтом</h2>
        <h3>от 399 ₽</h3>
        </div>
        <div className="cardInfo__service">
          <img src={CheckIcon} alt="check" />
          <p>Аудио, видео или чат</p>
        </div>
        <div className="cardInfo__service">
          <img src={CheckIcon} alt="check" />
          <p>Продолжительность до 60 минут</p>
        </div>
        <div className="cardInfo__service">
          <img src={CheckIcon} alt="check" />
          <p>
            Подробный отчет после консультации: что сделать сейчас, чтобы стало
            лучше
          </p>
        </div>
      </div>
      <button>Начать консультацию</button>
    </div>
  );
}

export default CardInfo;
