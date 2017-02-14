import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import './index.css';

const SearchResult = (props) => {
  const movie = props.searchResult;

  let imageDiv = null;
  let descriptionHeader = null;
  let addButton = null;

  if (movie.posterPath.length > 0) {
    imageDiv = <div className="image-holder">
      <img
        src={movie.posterPath}
        alt={movie.title}
      />
    </div>;

    descriptionHeader = <h4>Movie Description</h4>;

    addButton = <Button
      type="button"
      className="add-movie"
      onClick={() => props.onAdd(movie)}>
      + Add Movie
    </Button>;
  }

  return (
    <div className="SearchResult">
      {imageDiv}
      <div className="body-holder">
        <h2>{movie.title}</h2>
        {descriptionHeader}
        <p>{movie.overview}</p>
      </div>
      <Button
        type="button"
        className="ex"
        onClick={props.onClose}>
        X
      </Button>
      {addButton}
    </div>
  );
};

SearchResult.propTypes = {
  searchResult: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default SearchResult;
