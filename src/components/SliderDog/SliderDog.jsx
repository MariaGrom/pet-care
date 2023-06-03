import "./SliderDog.scss";

function SliderDog({onClick}) {
  return (
    <section className="sliderDog">
      <div className="sliderDog__content">
        <div className="sliderDog__description">
          <div className="sliderDog__text">
          <h2>Закажите план заботы</h2>
          <h3>
          Регулярная доставка специально подобранного корма и других товаров для&nbsp;кошек и собак
          </h3>
          <h4>от 1299 ₽/мес</h4>
          </div>
          <button type="button" className="sliderDog__button" onClick={onClick}>Подобрать план</button>
        </div>
      </div>
    </section>
  );
}

export default SliderDog;
