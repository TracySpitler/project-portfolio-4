import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var url = "https://api.themoviedb.org/3/movie/popular?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3"

// fetch(url)
//     .then(response => {
//     if (response.ok) {
//         return response.json()
//     } else {
//         return Promise.reject('something went wrong!')
//     }
// })
// .then(data => {
//     //JS
//     console.log('data is ', data)
// })
// .catch(error => console.log('error is ', error))


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject('something went wrong!')
            }
        })
        .then(data => {
            console.log('data is ', data)

            this.setState({
                isLoaded: true,
                movies: data.results,
            })
        })
        .catch(error => console.log('error is ', error))
    }

    render() {

        return (
            <div className="App">
            <p>"Popular Movies"</p>
            {this.state.movies.map((movie, id) => (
                <p key={id}>
                    ID: {movie.id}<br />
                    Title: {movie.title}<br />
                    Overview: {movie.overview}
                </p>
            ))}
            {
                // <header className="App-header">
                //   <img src={logo} className="App-logo" alt="logo" />
                //   <h1 className="App-title">Welcome to React</h1>
                // </header>
                // <p className="App-intro">
                //   To get started, edit <code>src/App.js</code> and save to reload.
                // </p>
            }
            </div>
        );
    }
}

export default App;
