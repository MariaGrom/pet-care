import "./CardDog.scss";
import ArrowIcon from "../../images/Arrow 1.svg";

function CardDog() {
  return (
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
  );
}

export default CardDog;
