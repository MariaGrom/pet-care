import React from "react";
import { useState } from "react";
import "./App.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SimpleSlider from "../SimpleSlider/SimpleSlider";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <PopupWithForm
        isOpen={isOpen}
        onClose={handleClosePopup}
        onSubmit={handleSubmit}
      />
      <SimpleSlider onClick={handleOpenPopup} />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
