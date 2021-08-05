import React, { useState } from 'react';

//Component
import { CartWidget } from '../../Cart/CartWidget/CartWidget';

// React-Router
import { Link } from 'react-router-dom';

// Style
import './NavBar.css';

//Logo
import logo from '../../../assets/logo/logo.png';

export const NavBar = (props) => {
  const cellphones = 'cellphones';
  const tv = 'tv';
  const videogames = 'videogames';

  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className='navbar'>
      <Link className='nav-logo' to={'/'}>
        <img src={logo} alt='Logo Eindhoven' />
      </Link>
      <div className='nav-content'>
        <ul
          className={`nav-menu ${!isActive ? 'active' : ''}`}
          onClick={handleToggle}
        >
          <li className='nav-item'>
            <Link to={'/'} className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/categories/' + cellphones} className='nav-link'>
              Celulares
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/categories/' + tv} className='nav-link'>
              Televisores
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/categories/' + videogames} className='nav-link'>
              Gaming
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/my-orders'} className='nav-link'>
              Mis compras
            </Link>
          </li>
        </ul>
        <CartWidget />
      </div>
      <div
        className={`hamburger ${!isActive ? 'active' : ''}`}
        onClick={handleToggle}
      >
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </nav>
  );
};
