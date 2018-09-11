import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'

//React Router
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
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
