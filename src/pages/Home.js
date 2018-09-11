import React, { Component } from 'react';

var api_key = "2cb547f6b21d9fecbf9c3ada7fa19ba3"
var imgURL = "http://image.tmdb.org/t/p/original/"
var url = "https://api.themoviedb.org/3/movie/popular?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3"

// url http://api.themoviedb.org/3
// if search: /search
// -- params (w or wo ?) /movie, /tv, /person
// id /{id}
// api ?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3
// if search: &query=Fight+Club
// collect info &append_to_response=videos
// -- params videos, images, similar, etc

class Home extends Component {

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
      <div>
        <p>Home page successfully created!</p>
        {this.state.movies.map((movie, id) => (
            <p key={id}>
            ID: {movie.id}<br />
            Title: {movie.title}<br />
            Overview: {movie.overview}
            </p>
        ))}
      </div>
    );
  }
}

export default Home
