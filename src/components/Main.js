import React, { Component } from 'react';
import Discover from '../pages/Discover'
import Favorites from '../pages/Favorites'
import History from '../pages/History'
import Library from '../pages/Library'
import Lists from '../pages/Lists'
import Home from '../pages/Home'

//React Router
import { Route } from 'react-router-dom'

class Main extends Component {

    render() {
        return (
            <div className="main-div">
                <Route path="/Home" component={Home}/>
                <Route path="/Discover" component={Discover}/>
                <Route path="/Favorites" component={Favorites}/>
                <Route path="/History" component={History}/>
                <Route path="/Library" component={Library}/>
                <Route path="/Lists" component={Lists}/>
            </div>
        );
    }
}

export default Main
