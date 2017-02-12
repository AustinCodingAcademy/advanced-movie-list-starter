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
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <form>
            <FormGroup
              controlId="formBasicText">
              <FormControl
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
