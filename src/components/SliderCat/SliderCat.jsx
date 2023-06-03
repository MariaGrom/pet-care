import "./SliderCat.scss";

function SliderCat() {
  return (
    <section className="slider">
      <div className="slider__content">
        <div className="slider__description">
          <h1>Мы заботимся о ваших питомцах</h1>
          <h2>
            Записывайтесь в ветклиники и&nbsp;консультируйтесь с ветеринарным врачом
            онлайн
          </h2>
          <a href="#contacts" className="slider__button">Связаться с нами</a>
        </div>
        <div className="slider__img"> </div>
      </div>
    </section>
  );
}

export default SliderCat;
