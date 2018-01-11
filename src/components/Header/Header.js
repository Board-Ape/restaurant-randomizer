import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='header-container'>
          <p><Link className='nav-links' to='/'>Home</Link></p>
          <p><Link className='nav-links' to='/message'>Message</Link></p>
          <p><Link className='nav-links' to='/randomizer'>Randomizer</Link></p >
          <p><Link className='nav-links' to='/favorites'>Favorites</Link></p >
        </div>
      </nav>
    </header>
  );
};

export default Header;
