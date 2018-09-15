import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Search from './components/Search'
import Main from './components/Main'


//React Router
import { BrowserRouter as Router } from 'react-router-dom'


class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Nav />
                    <Search />
                    <div className="container">
                        <Main />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
