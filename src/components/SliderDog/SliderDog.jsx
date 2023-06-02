import "./SliderDog.scss";

function SliderDog({onClick}) {
  return (
    <section className="sliderDog">
      <div className="sliderDog__content">
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
