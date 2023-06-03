import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderDog from "../SliderDog/SliderDog";
import SliderCat from "../SliderCat/SliderCat";
import "./SimpleSlider.scss";

export default function SimpleSlider({onClick}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="SliderDefault">
      <SliderCat />
      <SliderDog onClick={onClick}/>
    </Slider>
  );
}