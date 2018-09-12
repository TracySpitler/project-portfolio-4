import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Header from './components/Header'

//React Router
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <div className="container">
                        <Nav />
                        <Main />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
