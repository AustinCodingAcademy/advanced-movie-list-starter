import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
  }

  onAddMovie() {
    const { title, posterPath, overview, releaseDate } = {
      title: this.props.title,
      posterPath: this.props.posterPath,
      overview: this.props.overview,
      releaseDate: this.props.releaseDate
    };

    /* eslint no-console: 0*/
    console.log({ title, posterPath, overview, releaseDate });
    this.props.onAddMovie({ title, posterPath, overview, releaseDate });
  }

  render() {
    return (
      <div>
        <div className="posterAddMovie">
          <p>posterPath={this.props.posterPath}</p>
        </div>
        <div>
          <h2>{this.props.title}</h2>
          <h3>{this.props.releaseDate}</h3>
          <p>{this .props.overview}</p>
        </div>
      </div>
    );
  }
}


// ESLint React prop-type validation
AddMovie.propTypes = {
  posterPath: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  releaseDate: React.PropTypes.string.isRequired,
  overview: React.PropTypes.string.isRequired,
  onAddMovie: React.PropTypes.func.isRequired
};

export default AddMovie;
