import React, { Component } from 'react';

//React Router
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className="nav-header">
            <ul className="links wrapper">
                <li>
                <NavLink
                    to="/Discover"
                    activeClassName="current">Discover</NavLink>
                </li>
                <li>
                <NavLink
                    to="/Library"
                    activeClassName="current">Library</NavLink>
                </li>
                <li>
                <NavLink
                    to="/Lists"
                    activeClassName="current">My Lists</NavLink>
                </li>
                <li>
                <NavLink
                    to="/History"
                    activeClassName="current">History</NavLink>
                </li>
                <li>
                <NavLink
                    to="/Favorites"
                    activeClassName="current">Favorites</NavLink>
                </li>
            </ul>
            </nav>
        );
    }
}

export default Nav
