import React, { Component } from 'react';

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
// if search: /search
// -- params (w or wo ?) /movie, /tv, /person
// id /{id}
// api ?api_key=2cb547f6b21d9fecbf9c3ada7fa19ba3
// if search: &query=Fight+Club
// collect info &append_to_response=videos
// -- params videos, images, similar, etc


class Discover extends Component {

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

    componentDidMount() {
        this.setState({
            isLoaded: true,
        })

        this.fetchData(urls.movies.nowPlaying, "nowPlaying");
        this.fetchData(urls.movies.trending, "trending");
        console.log(this.state);
    }

    fetchData(url, name) {
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject('something went wrong!')
            }
        })
        .then(data => {
            let movies = {...this.state.movies};
            movies[name] = data.results;                        //updating value
            this.setState({movies});

        })
        .catch(error => console.log('error is ', error))
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
            <div className="container">
            <h1>Trending Movies:</h1>
            <ul className="content-scroll">
                {trending}
            </ul>
            </div>
        );
    }
}

export default Discover
