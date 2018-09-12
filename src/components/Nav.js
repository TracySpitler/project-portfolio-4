import React, { Component } from 'react';

//React Router
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className="Nav-Header">
            <ul className="Links">
                <li>
                <NavLink
                    to="/Discover"
                    activeClassName="Active">Discover</NavLink>
                </li>
                <li>
                <NavLink
                    to="/Library"
                    activeClassName="Active">Library</NavLink>
                </li>
                <li>
                <NavLink
                    to="/Lists"
                    activeClassName="Active">My Lists</NavLink>
                </li>
                <li>
                <NavLink
                    to="/History"
                    activeClassName="Active">History</NavLink>
                </li>
                <li>
                <NavLink
                    to="/Favorites"
                    activeClassName="Active">Favorites</NavLink>
                </li>
            </ul>
            </nav>
        );
    }
}

export default Nav
