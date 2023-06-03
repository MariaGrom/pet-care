import "./CardList.scss";
import CardDog from "../CardDog/CardDog";
import CardCat from "../CardCat/CardCat";
import CardInfo from "../CardInfo/CardInfo";

function CardList() {
  return (
    <section className="cardList">
      <div className="cardList__container">
        <div className="card-rotation">
          <CardDog />
          <CardInfo />
        </div>
        <CardCat />
      </div>
    </section>
  );
}

export default CardList;
