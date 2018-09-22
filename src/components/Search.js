import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="">
                <form className="search">
                    <input
                    type="text"
                    className="input"
                    placeholder="Start typing to search for a movie or TV show.."
                    />
                </form>
            </div>
        );
    }
}

export default Header
