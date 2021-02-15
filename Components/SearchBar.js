import React, { PropTypes } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

const SearchBar = props => {
  return (
    <form>
      <FormGroup
        controlId="formBasicText">
        <ControlLabel>Please search for a movie!</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter text"
          onChange={props.handleChange}
         />
      </FormGroup>
    </form>

  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
