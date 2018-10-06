import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <p>adelita</p>
        <NavLink className='nav' to='/'></NavLink>
        <NavLink className='nav' to='/login'>login</NavLink>
        <NavLink className='nav' to='/register'>register</NavLink>
        <NavLink className='nav' to='/journal'>journal</NavLink>
        <NavLink className='nav' to='/resources'>resources</NavLink>
      </div>
    );
  }
}

export default Nav;
