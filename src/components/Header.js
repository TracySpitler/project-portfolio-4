import React, { Component } from 'react';

//React Router
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="header wrapper">
        <div>
          <NavLink to="/Home"><h1>A<span>RCHIVE</span>!</h1></NavLink>
        </div>
        <div className="sign-up-in">
            <button>Log In</button>
            <button>Sign Up</button>
        </div>
        </nav>
      </header>
    );
  }
}

export default Header
