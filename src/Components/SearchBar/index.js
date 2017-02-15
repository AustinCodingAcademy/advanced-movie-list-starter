import React from 'react';
import Button from '../Button';

/* eslint max-len: [1, {"ignoreUrls": true}] */
const SearchBar = props => {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        value={props.value}
        onChange={event => props.onChange(event)}
        />
      <Button
        label="Submit"
        value="Submit"
        onClick={event => props.onSubmit(event)}
        />
    </div>
  );
};

export default SearchBar;
SearchBar.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};
