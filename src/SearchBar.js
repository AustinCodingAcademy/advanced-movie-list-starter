import React, { PropTypes } from 'react';
import {
  FormControl,
} from 'react-bootstrap';

const SearchBar = props => {
  return (
    <form>
      <FormControl
        className="searchtext"
        type="text"
        placeholder="Search by movie title"
        onChange={props.handleChange}
        />
    </form>

  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
