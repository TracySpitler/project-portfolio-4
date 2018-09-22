import React, { Component } from 'react';
import Discover from '../pages/Discover'
import Movies from '../pages/Movies';
import TV from '../pages/TV';

import Favorites from '../pages/Favorites'
import Lists from '../pages/Lists'

//React Router
import { Route } from 'react-router-dom'

var api_key = "2cb547f6b21d9fecbf9c3ada7fa19ba3"
//var imgURL = "http://image.tmdb.org/t/p/original"
//var multiSearch = "https://api.themoviedb.org/3/search/multi?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3&language=en-US&query=a&page=1&include_adult=false"
//var urlMovie = "https://api.themoviedb.org/3/movie/popular?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3"
//var urlTV = "https://api.themoviedb.org/3/tv/popular?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3"

var urls = {
    movies: {
        nowPlaying: "https://api.themoviedb.org/3/movie/now_playing?api_key=" + api_key,
        upcoming: "https://api.themoviedb.org/3/movie/upcoming?api_key=" + api_key + "&language=en-US&page=1",
        trending: "https://api.themoviedb.org/3/trending/movie/day?api_key=" + api_key,
        topRated: "https://api.themoviedb.org/3/movie/top_rated?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3&language=en-US&page=1",
    },
    tv: {
        topRated: "https://api.themoviedb.org/3/tv/top_rated?api_key=" + api_key + "&language=en-US&page=1",
        popular: "https://api.themoviedb.org/3/tv/popular?api_key=" + api_key + "&language=en-US&page=1",
        newHits: "https://api.themoviedb.org/3/discover/tv?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3&language=en-US&sort_by=popularity.desc&first_air_date_year=2018&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false",
    }
}
// if search: /search
// -- params (w or wo ?) /movie, /tv, /person
// id /{id}
// api ?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3
// if search: &query=Fight+Club
// collect info &append_to_response=videos
// -- params videos, images, similar, etc
const movieNames = ["nowPlaying", "upcoming", "trending", "topRated"];
const tvNames = ["topRated", "popular", "newHits"];


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            movies: {
                nowPlaying: [],
                upcoming: [],
                trending: [],
            },
            tv: {
                topRated: [],
                popular: [],
                newHits: [],
            },
        }
    }

    // when component mounts:
    componentDidMount() {
        // set state
        this.setState({
            isLoaded: true,
        })

        // fetch movie data and save to state
        movieNames.forEach((name) => {
            this.fetchData(urls.movies[name], name, "movies");
        });

        // fetch tv data and save to state
        tvNames.forEach((name) => {
            this.fetchData(urls.tv[name], name, "tv");
        });
    }

    fetchData(url, name, type) {
        if (type === "movies") {
            // fetch movie data
            fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            // save data to state
            .then(data => {
                let movies = {...this.state.movies};
                movies[name] = data.results;                     //updating value
                this.setState({movies});

            })
            // if there is an error, log to console
            .catch(error => console.log('error is ', error))
        }
        else {
            // fetch tv data
            fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            // save data to state
            .then(data => {
                let tv = {...this.state.tv};
                tv[name] = data.results;                        //updating value
                this.setState({tv});

            })
            // if there is an error, log to console
            .catch(error => console.log('error is ', error))
        }
    }

    // buildURL(params) {
    //     var query = ""
    //
    //     var baseURL = "https://api.themoviedb.org/3/"
    //     var apiKey = "?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3"
    //     var search = "&query=" + {query}
    //
    //     var appendTo = {
    //         movie: "&append_to_response=alternative_titles,changes,credits,images,keywords,lists,releases,reviews,similar,translations,videos",
    //         tv: "&append_to_response=alternative_titles,changes,content_ratings,credits,external_ids,images,keywords,similar,translations,videos",
    //         person: "&append_to_response=changes,combined_credits,external_ids,images,movie_credits,tagged_images,tv_credits"
    //     }
    //
    //     var url = baseURL + params + "/popular" + apiKey
    //     console.log(url);
    // }

    render() {
        // route components to this main section. Pass this.state to the components that need it
        return (
            <div className="main-div">
                <Route path='/Movies' render={(props) => (
                    <Movies {...props} movies={this.state.movies} hero={this.state.hero} />
                )}/>
                <Route path='/TV' render={(props) => (
                    <TV {...props} tv={this.state.tv} />
                )}/>
                <Route path='/Discover' render={(props) => (
                    <Discover {...props} movies={this.state.movies} tv={this.state.tv} />
                )}/>
                <Route path="/Favorites" component={Favorites}/>
                <Route path="/Lists" component={Lists}/>
            </div>
        );
    }
}

export default Main
