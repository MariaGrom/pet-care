import "./CardList.scss";
import CardDog from "../CardDog/CardDog";
import CardCat from "../CardCat/CardCat";
import CardInfo from "../CardInfo/CardInfo";

function CardList() {
  return (
    <section className="cardList">
      <div className="cardList__container">
        <CardDog />
        <CardCat />
      </div>
    </section>
  );
}

export default CardList;
