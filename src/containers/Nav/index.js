import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <div className='menu'>
        <NavLink className='icon' to='/home'><p>adelita</p></NavLink>
        <div className='pages'>
          <NavLink className='nav' to='/incident'>incident</NavLink>
          <NavLink className='nav' to='/journal'>journal</NavLink>
          <NavLink className='nav' to='/resources'>resources</NavLink>
          <NavLink className='nav' to='/login'>logout</NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
