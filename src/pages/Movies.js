import React, { Component } from 'react';

var imgURL = "http://image.tmdb.org/t/p/original"

class Movies extends Component {

    //only grab a specific amount of data to load in
    paginator( arr, perPage )
    {
        if ( perPage < 1 || !arr ) return () => [];

        return function( page ) {
            const basePage = page * perPage;

            return page < 0 || basePage >= arr.length
            ? []
            : arr.slice( basePage,  basePage + perPage );
        };
    }

    render() {
        //create list and jsx for trending movies
        const paginate = this.paginator( this.props.movies.trending, 8 );
        var trend = paginate( 0 );
        const trending = trend.map(( movie, id ) => (
            <li key={id}>
            <div className="card">
            <img className="backdrop" src={ imgURL + movie.backdrop_path } alt={movie.title} />
            <div className="card-content">
            <h3>{ movie.title }</h3>
            </div>
            </div>
            </li>
        ))

        //create list and jsx for movies that are now playing
        const paginate1 = this.paginator( this.props.movies.nowPlaying, 8 );
        var np = paginate1( 1 );
        const nowPlaying = np.map(( movie, id ) => (
            <li key={id}>
            <div className="card">
            <img className="backdrop" src={ imgURL + movie.backdrop_path } alt={movie.title} />
            <div className="card-content">
            <h3>{ movie.title }</h3>
            </div>
            </div>
            </li>
        ))

        //create list and jsx for upcoming movies
        const paginate2 = this.paginator( this.props.movies.upcoming, 8 );
        var up = paginate2( 0 );
        const upcoming = up.map(( movie, id ) => (
            <li key={id}>
            <div className="card">
            <img className="backdrop" src={ imgURL + movie.backdrop_path } alt={movie.title} />
            <div className="card-content">
            <h3>{ movie.title }</h3>
            </div>
            </div>
            </li>
        ))

        //create list and jsx for top rated movies
        const paginate3 = this.paginator( this.props.movies.topRated, 8 );
        var tr = paginate3( 0 );
        const topRated = tr.map(( movie, id ) => (
            <li key={id}>
            <div className="card">
            <img className="backdrop" src={ imgURL + movie.backdrop_path } alt={movie.title} />
            <div className="card-content">
            <h3>{ movie.title }</h3>
            </div>
            </div>
            </li>
        ))

        return (
            <div>
                <div className="browse">
                <span className="title">Movies</span>
                    <h2>Upcoming:</h2>
                    <ul className="content-scroll">
                    {upcoming}
                    </ul>
                </div>
                <div className="browse">
                    <h2>Top Rated:</h2>
                    <ul className="content-scroll">
                    {topRated}
                    </ul>
                </div>
                <div className="browse">
                    <h2>Trending:</h2>
                    <ul className="content-scroll">
                    {trending}
                    </ul>
                </div>
                <div className="browse">
                    <h2>Now Playing:</h2>
                    <ul className="content-scroll">
                    {nowPlaying}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Movies
