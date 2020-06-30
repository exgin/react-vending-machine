import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <NavLink exact to='/kitkat'>
        Kit-Kat
      </NavLink>
      <NavLink exact to='/pringles'>
        Pringles
      </NavLink>
      <NavLink exact to='/proteinbar'>
        Protein-Bar
      </NavLink>
    </nav>
  );
};

export default NavBar;
