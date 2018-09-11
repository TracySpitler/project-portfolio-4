import React, { Component } from 'react';

//React Router
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
    <nav className="Nav-side">
      <NavLink to="/Home" className="Side-icon">Home</NavLink>
      <br />
      <p>
      <NavLink to="/Discover" className="Side-icon">Discover</NavLink>
      -
      <NavLink to="/Library" className="Side-icon">Library</NavLink>
      -
      <NavLink to="/Lists" className="Side-icon">My Lists</NavLink>
      -
      <NavLink to="/History" className="Side-icon">History</NavLink>
      -
      <NavLink to="/Favorites" className="Side-icon">Favorites</NavLink>
      </p>
    </nav>
    );
  }
}

export default Nav
