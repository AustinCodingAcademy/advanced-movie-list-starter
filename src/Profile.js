import React, { Component } from 'react';
import axios from 'axios';


class Profile extends Component {
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
      /* eslint no-console: 0 */
      .catch(err => console.log(`Error! ${err}`));
  }


  renderProfile() {
    return (
      <div className="profile">
        <div className="image-cropper">
          <img src={this.state.movie.poster} alt="poster" />
        </div>
        <div className="movie-info">
          <h2>Title: {this.state.movie.originalTitle}</h2>
          <h4>Overview:</h4>
          <span>{this.state.movie.overview}</span>
        </div>
      </div>
    );
  }


  render() {
    if (!this.state.movie) {
      return <h2>Loading...</h2>;
    }

    return this.renderProfile();
  }
}


// ESLint React prop-type validation
Profile.propTypes = {
  match: React.PropTypes.object.isRequired,
};


export default Profile;
