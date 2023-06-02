import "./SliderCat.scss";
import SliderCatIcon from "../../images/slider-cat.svg";

function SliderCat() {
  return (
    <section className="slider">
      <div className="slider__content">
        {/* <button
          type="button"
          id="btn-left"
          className="button__arrow button__arrow-left button__arrow-left_active"
        ></button>
        <button
          type="button"
          id="btn-right"
          className="button__arrow button__arrow-right button__arrow-right_active"
        ></button> */}
        <div className="slider__description">
          <h1>Мы заботимся о ваших питомцах</h1>
          <h2>
            Записывайтесь в ветклиники и&nbsp;консультируйтесь с ветеринарным врачом
            онлайн
          </h2>
          <button type="button" className="slider__button">Связаться с нами</button>
        </div>
        <div className="slider__img"> </div>
      </div>
    </section>
  );
}

export default SliderCat;
