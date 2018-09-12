import React, { Component } from 'react';

//React Router
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="Header">
        <div>
          <NavLink to="/Home" className="Side-icon"><h1>A<span>RCHIVE</span>!</h1></NavLink>
        </div>
        <div className="SignUpIn">
            <button>Log In</button>
            <button>Sign Up</button>
        </div>
        </nav>
      </header>
    );
  }
}

export default Header
