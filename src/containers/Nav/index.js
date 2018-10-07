import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <div className='bar'>
        <NavLink className='nav icon' to='/home'><p>ADELITA</p></NavLink>
        <div className='menuBar'>
        <NavLink className='nav' to='/incident'>Incident</NavLink>
        <NavLink className='nav' to='/journal'>Journal</NavLink>
        <NavLink className='nav' to='/resources'>Resources</NavLink>
        <NavLink className='nav' to='/login'>Login</NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
