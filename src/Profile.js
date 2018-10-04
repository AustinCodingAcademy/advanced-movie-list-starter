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
      .catch(err => console.log(`Error! ${err}`));
  }

  renderProfile() {
    return (
      <div className="profile">
        <div className="image">
          <img src={`https://image.tmdb.org/t/p/w154/${this.state.movie.poster}`} alt="avatar" />
        </div>
        <div className="info">
          <h2>Name: {this.state.movie.title}</h2>
          <p>Overview: {this.state.movie.overview}</p>
          <p>Release_Date: {this.state.movie.releaseDate}</p>
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

Profile.propTypes = {
  match: React.PropTypes.object.isRequired
};

export default Profile;
