import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';



const SearchBar = (props) => {

  return (
    <form onSubmit={(event) => props.onSubmit(event)}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={props.value}
        onChange={(event) => props.onChange(event)}
      />
      <Button type="submit">
        Submit
      </Button>
    </form>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
