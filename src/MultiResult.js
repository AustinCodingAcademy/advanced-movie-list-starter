import React from 'react';

class MultiResult extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Search returned...</h3>
        {this.props.searchResult.map(movie => {
          return (
              <span key={movie.id}><a href="#" onClick={() => this.props.handleMovie(movie.id)}>{movie.title} - {movie.release_date}</a>; </span>
          )}
        )}
      </div>
    )
  }
}

MultiResult.propTypes = {
  searchResult: React.PropTypes.array
}

export default MultiResult;
