import React, { Component } from 'react';

//React Router
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="header wrapper">
        <div>
          <NavLink to="/Discover"><h1>A<span>RCHIVE</span>!</h1></NavLink>
        </div>
        </nav>
      </header>
    );
  }
}

export default Header
