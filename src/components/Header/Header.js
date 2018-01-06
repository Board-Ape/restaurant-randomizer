import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='header-container'>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/message'>Message</Link></p>
          <p><Link to='/randomizer'>Randomizer</Link></p >
          <p><Link to='/map'>MapLocation</Link></p >
        </div>
      </nav>
    </header>
  );
};

export default Header;
