import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SliderCat from '../SliderCat/SliderCat';
import CardList from '../CardList/CardList';
import './App.scss';
import SliderDog from '../SliderDog/SliderDog';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from '../SimpleSlider/SimpleSlider';

function App() {
  const [isOpen, setIsOpen] = useState(false)

const handleOpenPopup = () => {
  console.log('open')
  setIsOpen(true)
}

const handleClosePopup = () =>{
  console.log('close')
  setIsOpen(false)
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('submit')
  setIsOpen(false)
}

  return (
    <div className="App">
<Header />
{/* <SliderCat /> */}
<PopupWithForm isOpen ={isOpen} onClose={handleClosePopup} onSubmit={handleSubmit}/>
{/* <SliderDog onClick={handleOpenPopup}/> */}
<SimpleSlider onClick={handleOpenPopup}/>
<CardList />
<Footer/>
    </div>
  );
}

export default App;
