import "./CardDog.scss";
import ArrowIcon from "../../images/Arrow 1.svg";
import CheckIcon from "../../images/check.svg";

function CardDog() {
  return (
<div className="card-rotation"> 

      <div className="card front">
        <div className="card__img_dog">
          <div className="card__description">
            <div className="card__text">
              <h2>
                Сколько стоит
                <br />
                онлайн-консультация
                <br />с терапевтом?
              </h2>
              <img src={ArrowIcon} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
  

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
              Подробный отчет после консультации: что сделать сейчас, чтобы
              стало лучше
            </p>
          </div>
        </div>
        <button>Начать консультацию</button>
      </div>


</div>
  );
}

export default CardDog;
