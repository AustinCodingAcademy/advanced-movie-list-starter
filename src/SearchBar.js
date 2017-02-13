import React, {PropTypes} from 'react';
import {
  FormGroup,
  FormControl,
  Button,
  Grid
} from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <Grid>
      <form className="search-component">
        <FormGroup className="search-bar">
          <FormControl
            type="text"
            value={props.value}
            onChange={event => props.onChange(event)}
          />
        </FormGroup>
        <Button
          className="search-button"
          type="submit"
          onClick={props.onSubmit}>
          Search
        </Button>
      </form>
    </Grid>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
