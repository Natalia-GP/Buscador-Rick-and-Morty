import { Link } from 'react-router-dom';
//images
import logo from '../images/Rick_and_Morty_title_card_.png';
//styles
import '../styles/components/Header.scss';

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Evaluación final Natalia Gómez Pérez</h1>
        <Link to="/" className="header__link">
          <img
            src={logo}
            alt="Rick and Morty Logo"
            className="header__link--logo"
          />
        </Link>
      </header>
      <h2 className="MainCh">Characters</h2>
    </>
  );
}

export default Header;
