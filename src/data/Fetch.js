import React, { Component } from 'react';
import Movies from '../pages/Movies'

var api_key = "2cb547f6b21d9fecbf9c3ada7fa19ba3"
var imgURL = "http://image.tmdb.org/t/p/original"
//var urlMovie = "https://api.themoviedb.org/3/movie/popular?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3"
//var urlTV = "https://api.themoviedb.org/3/tv/popular?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3"

var urls = {
    movies: {
        nowPlaying: "https://api.themoviedb.org/3/movie/now_playing?api_key=" + api_key + "&language=en-US&page=1",
        upcoming: "https://api.themoviedb.org/3/movie/upcoming?api_key=" + api_key + "&language=en-US&page=1",
        trending: "https://api.themoviedb.org/3/trending/movie/day?api_key=" + api_key
    },
    tv: {
        topRated: "https://api.themoviedb.org/3/tv/top_rated?api_key=" + api_key + "&language=en-US&page=1",
        popular: "https://api.themoviedb.org/3/tv/popular?api_key=" + api_key + "&language=en-US&page=1"
    }
}

class Fetch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            hero: {
                movies: [],
                tv: [],
            },
            movies: {
                nowPlaying: [],
                upcoming: [],
                trending: [],
            },
            tv: {
                topRated: [],
                popular: [],
            },
        }
    }

    fetchData(name) {
        fetch(urls.movies.nowPlaying)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject('something went wrong!')
            }
        })
        .then(data => {
            let movies = {...this.state.movies};
            movies[name] = data.results;                   //updating value
            this.setState({movies});

        })
        .catch(error => console.log('error is ', error))
    }

  render() {
      this.fetchData("nowPlaying");

      console.log(this.state);

      const trending = this.state.movies.trending.map((movie, id) => (
      <li key={id}>
          <div className="card">
              <img className="backdrop" src={imgURL + movie.backdrop_path} alt={movie.title} />
              <div className="card-content">
                  <h3>{movie.title}</h3>
                  <p>check it out!</p>
              </div>
          </div>
      </li>
      ))

    return (
      <div>
        <p>Fetching page successfully created!</p>
        <Movies movies={this.state.movies}/>
      </div>
    );
  }
}

export default Fetch
