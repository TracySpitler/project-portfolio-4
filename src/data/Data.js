import React, { Component } from 'react';

// class Data extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {color: 'red'};
//   }
//   render() {
//     return <Pg1 color={this.state.color} />;
//   }
// }
//
// // class Data extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {color: 'red'};
// //     }
// //     render() {
// //         return (
// //             <div>
// //             <Movies color={this.state.color} />
// //             <p>My favorite color is {this.props.color}.</p>
// //             </div>);
// //     }
// // }
//
// // componentDidMount() {
// //     fetch(url)
// //     .then(response => {
// //         if (response.ok) {
// //             return response.json()
// //         } else {
// //             return Promise.reject('something went wrong!')
// //         }
// //     })
// //     .then(data => {
// //         console.log('data is ', data)
// //
// //         this.setState({
// //             isLoaded: true,
// //             movies: data.results,
// //         })
// //     })
// //     .catch(error => console.log('error is ', error))
// // }
//
//
//
// // class Pg1 extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             movies:,
// //             isLoaded: false,
// //         }
// //     }
// //
// //     render() {
// //         return (
// //             <div className="Main-div">
// //             <p>You did it!</p>
// //             <p>"Popular Movies"</p>
// //             {
// //             // {this.state.movies.map((movie, id) => (
// //             //     <p key={id}>
// //             //     ID: {movie.id}<br />
// //             //     Title: {movie.title}<br />
// //             //     Overview: {movie.overview}
// //             //     </p>
// //             // ))}
// //             }
// //             </div>
// //         );
// //     }
// // }
// //
// export default Data
class SomeChildComponent extends Component {
  render() {
    return <p>My favorite color is {this.props.color}.</p>;
  }
}

export default SomeChildComponent
