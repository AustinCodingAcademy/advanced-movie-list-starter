import React, { Component } from 'react';
import axios from 'axios';

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
      <div className="movie-profile">
        <div className="image-cropper">
          <img src={this.state.movie.poster_path} alt="poster" />
        </div>
        <div className="movie-info">
          <h2>{this.state.movie.title}</h2>
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
