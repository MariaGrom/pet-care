import './Footer.scss';
import logoIcon from '../../images/logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <a className='footer__logo'></a>
      <div id="contacts" className='footer__contacts'>
        <p>8(800)999-88-77</p>
        <p>info@petcare.com</p>
      </div>
      <p className='footer__copyright'>©2021 PetCare. Все права защищены </p>
      <a><img src={logoIcon} alt="logo"/></a>
    </footer>
  );
}

export default Footer;
