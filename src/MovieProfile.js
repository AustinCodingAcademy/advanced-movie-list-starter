import React, { Component } from 'react';
import axios from 'axios';
import './MovieProfile.css'

class MovieProfile extends Component {
  constructor() {
    super();

    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    axios.get(`/movies/${this.props.match.params.id}`)
    .then(resp => {
      this.setState({
        movie: resp.data
      });
    })
    .catch(err => console.log(`Movie profile GET error: ${err}`));
  }

  renderMovieProfile() {
    return (
      <div id="movie-profile">
        <div className="movie-backdrop">
          <img src={this.state.movie.backdrop_path}/>
          <h1>{this.state.movie.title}</h1>
        </div>
        <div className="movie-info">
          <h3>Released: {this.state.movie.release_date}</h3>
          <span>{this.state.movie.overview}</span>
        </div>
      </div>
    );
  }

  render() {
    if(!this.state.movie) {
      return <h2>Loading...</h2>;
    }
    return this.renderMovieProfile();
  }
}

export default MovieProfile;
