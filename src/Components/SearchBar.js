import React, { PropTypes } from 'react';
import {
  FormGroup,
  FormControl,
  Grid,
  Col,
  Row
} from 'react-bootstrap';

const SearchBar = props => {
  return (
    <Grid className="searchbar">
      <Row >
        <Col xs={12} md={9} >
          <form>
            <FormGroup
              controlId="formBasicText">
              <FormControl
                className="searchtext"
                type="text"
                placeholder="Search by movie title"
                onChange={props.handleChange}
                />
            </FormGroup>
          </form>
        </Col>
      </Row>
    </Grid>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
