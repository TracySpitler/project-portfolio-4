import React, { Component } from 'react';

var imgURL = "http://image.tmdb.org/t/p/original"

class Discover extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        const nowPlaying = this.props.movies.nowPlaying.map((movie, id) => (
        <li key={id}>
            <div className="card">
                <img className="backdrop" src={imgURL + movie.backdrop_path} alt={movie.title} />
                <div className="card-content">
                    <h3>{movie.title}</h3>
                </div>
            </div>
        </li>
        ))

        return (
            <div>
            <section>
            <div className="hero">
            <header className="hero-header">
                <span className="hero-title">The Predator</span>
            </header>
            <footer className="hero-footer">
            <p>From the outer reaches of space to the small-town streets of suburbia, the hunt comes home. Now, the universe’s most lethal hunters are stronger, smarter and deadlier than ever before, having genetically upgraded themselves with DNA from other species. When a young boy accidentally triggers their return to Earth, only a ragtag crew of ex-soldiers and a disgruntled science teacher can prevent the end of the human race.</p>
            </footer>
            </div>
            </section>

                <div className="browse container">
                <h2>Now Playing In Theaters:</h2>
                <ul className="content-scroll">
                    {nowPlaying}
                    </ul>
                </div>
            </div>

        );
    }
}

export default Discover
