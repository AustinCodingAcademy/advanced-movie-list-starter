import React from 'react';

class MovieRating extends React.Component {
  constructor() {
    super()
  }

  handleRating (rating) {
    this.props.updateRating(this.props.id, rating);
  }

  render() {
    return (
      <div className="movie-rating">
        {this.props.rating >= 1 ? <span className="fa fa-star" onClick={() => this.handleRating(1)}></span>:
        <span className="fa fa-star-o" onClick={() => this.handleRating(1)}></span>}
        {this.props.rating >= 2 ? <span className="fa fa-star" onClick={() => this.handleRating(2)}></span>:
        <span className="fa fa-star-o" onClick={() => this.handleRating(2)}></span>}
        {this.props.rating >= 3 ? <span className="fa fa-star" onClick={() => this.handleRating(3)}></span>:
        <span className="fa fa-star-o" onClick={() => this.handleRating(3)}></span>}
        {this.props.rating >= 4 ? <span className="fa fa-star" onClick={() => this.handleRating(4)}></span>:
        <span className="fa fa-star-o" onClick={() => this.handleRating(4)}></span>}
        {this.props.rating === 5 ? <span className="fa fa-star" onClick={() => this.handleRating(5)}></span>:
        <span className="fa fa-star-o" onClick={() => this.handleRating(5)}></span>}
      </div>
    )
  }
}

MovieRating.propTypes = {
  rating: React.PropTypes.number,
  updateRating: React.PropTypes.func
}

export default MovieRating;
