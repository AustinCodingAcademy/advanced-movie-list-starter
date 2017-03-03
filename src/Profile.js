import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Profile extends Component {
  constructor() {
    super();

    this.state = {
      movie: null
    };
  }
  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=2dba200e2682e0f8903ed87b9c9e02d1&language=en-US`)
      .then(resp => {
        this.setState({
          movie: resp.data
        });
      })
      .catch(err => console.log(`Error ${err}`));
  }
  getallGenres() {
    this.state.movie.genres.forEach(genre => {
      return genre.name;
    });
  }
  renderProfile() {
    return (
      <div className="row" id="profileRow">
        <div className="header row animated fadeIn" id="profileHeader">
          <div className="col-xs-12">
            <h1><Link className="linkTo" to={'/'}>RocketShippDB</Link></h1>
            <i
              className="fa fa-rocket"
              aria-hidden="false"
            />
          </div>
        </div>
        <div className="profileContents animated fadeIn">
          <div className="col-xs-12 col-md-4 profileColumn" id="leftProfileColumn">
            <div className="profileMovieTitle flexBoxCenterThis">
              <h3>{this.state.movie.original_title}</h3>
            </div>
            <div className="profilePosterContainer flexBoxCenterThis">
              <img src={`https://image.tmdb.org/t/p/w154/${this.state.movie.poster_path}`} />
            </div>
            <div className="profileDetails flexBoxCenterThis">
              <p>Runtime: {this.state.movie.runtime} minutes</p>
              <p>Released: {this.state.movie.release_date}</p>
              <p>Genre: {this.state.movie.genres[0].name}</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-8 profileColumn" id="rightProfileColumn">
            <div className="profileTagline flexBoxCenterThis">
              <h3>{this.state.movie.tagline}</h3>
            </div>
            <div className="profileOverviewContainer flexBoxCenterThis">
              <div className="profileOverview">
                <h1>Overview</h1>
                <hr />
                <p>{this.state.movie.overview}</p>
              </div>
            </div>
            <div className="profileStats">
              <p><span>Vote Average:</span> {this.state.movie.vote_average}</p>
              <p><span>Vote Count:</span> {this.state.movie.vote_count}</p>
              <p><span>Budget:</span> ${this.state.movie.budget}</p>
              <p><span>Revenue:</span> ${this.state.movie.revenue}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    if (!this.state.movie) {
      return (
        <div className="col-xs-12 flexBoxCenterThis noMovies animated fadeIn">
          <h1>Hmm...</h1>
          <p>Nothing to see here</p>
        </div>
      );
    }
    return this.renderProfile();
  }
}

export default Profile;
