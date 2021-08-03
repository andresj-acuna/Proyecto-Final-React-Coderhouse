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
    <>
      {/* <div className='header'>
        <div className='wrapper'>
          <div className='header-content'>
            <nav className='navbar'>
              <div className='navbar-header'>
                <Link
                  className='navbar-brand'
                  to={'/Proyecto-Final-React-Coderhouse'}
                >
                  <img src={logo} alt='logo eindhoven' />
                </Link>

              </div>

              <div className='menu-carrito'>
                <ul className='menu'>
                  <li>
                    <Link to={'/Proyecto-Final-React-Coderhouse'}>Home</Link>
                  </li>
                  <li>
                    <Link to={'/categories/' + cellphones}>Celulares</Link>
                  </li>
                  <li>
                    <Link to={'/categories/' + tv}>Televisores</Link>
                  </li>
                  <li>
                    <Link to={'/categories/' + videogames}>Gaming</Link>
                  </li>
                  <li>
                    <Link to={'/my-orders'}>Mis compras</Link>
                  </li>
                </ul>
                <CartWidget />
              </div>
            </nav>
          </div>
        </div>
      </div> */}

      <nav className='navbar'>
        <Link className='nav-logo' to={'/Proyecto-Final-React-Coderhouse'}>
          <img src={logo} alt='logo eindhoven' />
        </Link>
        <div className='nav-content'>
          <ul
            className={`nav-menu ${!isActive ? 'active' : ''}`}
            onClick={handleToggle}
          >
            <li className='nav-item'>
              <Link
                to={'/Proyecto-Final-React-Coderhouse'}
                className='nav-link'
              >
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
    </>
  );
};
