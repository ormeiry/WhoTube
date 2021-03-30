import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainBar.css';

function MainBar() {
  return (
    <div className='main-bar'>
      <NavLink to='/'>
        <h1>WhoTube</h1>
      </NavLink>
      <ul className='nav-links'>
        <li>
          <NavLink to='/trends'>Trends</NavLink>
        </li>
        <li>
          <NavLink to='/mylibrary'>My Library</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainBar;
