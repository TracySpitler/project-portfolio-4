import React, { Component } from 'react';

var imgURL = "http://image.tmdb.org/t/p/original"

class TV extends Component {

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
        //create list and jsx for top rated tv shows
        const paginate = this.paginator( this.props.tv.topRated, 8 );
        var tr = paginate( 0 );
        const topRated = tr.map(( tv, id ) => (
            <li key={id}>
            <div className="card">
            <img className="backdrop" src={ imgURL + tv.backdrop_path } alt={tv.name} />
            <div className="card-content">
            <h3>{ tv.name }</h3>
            </div>
            </div>
            </li>
        ))

        //create list and jsx for new hit tv shows
        const paginate1 = this.paginator( this.props.tv.newHits, 8 );
        var nh = paginate1( 0 );
        const newHits = nh.map(( tv, id ) => (
            <li key={id}>
            <div className="card">
            <img className="backdrop" src={ imgURL + tv.backdrop_path } alt={tv.name} />
            <div className="card-content">
            <h3>{ tv.name }</h3>
            </div>
            </div>
            </li>
        ))

        //create list and jsx for popular tv shows
        const paginate2 = this.paginator( this.props.tv.popular, 8 );
        var pop = paginate2( 0 );
        const popular = pop.map(( tv, id ) => (
            <li key={id}>
            <div className="card">
            <img className="backdrop" src={ imgURL + tv.backdrop_path } alt={tv.name} />
            <div className="card-content">
            <h3>{ tv.name }</h3>
            </div>
            </div>
            </li>
        ))

        return (
            <div>
                <div className="browse">
                <span className="title">TV Shows</span>
                    <h2>New Hits:</h2>
                    <ul className="content-scroll">
                    {newHits}
                    </ul>
                </div>
                <div className="browse">
                    <h2>Top Rated:</h2>
                    <ul className="content-scroll">
                    {topRated}
                    </ul>
                </div>
                <div className="browse">
                    <h2>Popular:</h2>
                    <ul className="content-scroll">
                    {popular}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TV
