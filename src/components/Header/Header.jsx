import "./Header.scss";
import logoIcon from '../../images/logo.svg';
import instagramIcon from '../../images/insta.svg';
import telegramIcon from '../../images/telegram.svg';
import vkIcon from '../../images/vk.svg';

function Header(props) {

  return (
    <header className='header'>
      <a><img src={logoIcon} alt="logo"/></a>
      <nav>
        <ul className='header__navigation'>
         <li><a herf="#" target="_parent" className="header__link">Новости</a></li>
         <li><a herf="#" target="_parent">О нас</a></li>
         <li><a herf="#" target="_parent">Блог</a></li>
         <li><a herf="#" target="_parent">Услуги</a></li>
         <li><a herf="#" target="_parent">Контакты</a></li>
        </ul>
        <button className='header__menu' onClick={props.onClick}></button>
      </nav>
      <ul className='header__contacts'>
  <li><a herf="#" target="_blank"><img src={instagramIcon} alt="instagram"/></a></li>
  <li><a herf="#" target="_blank"><img src={telegramIcon} alt="telegram"/></a></li>
  <li><a herf="#" target="_blank"><img src={vkIcon} alt="vk"/></a></li>
</ul>
    </header>
  );
}

export default Header;
