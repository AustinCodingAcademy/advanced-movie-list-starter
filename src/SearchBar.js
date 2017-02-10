/**
 * Created by brianmichael on 2/6/17.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton'

const SearchBar = (props) => {

  return (
      <section className="search-container">
        <Paper className="search-paper">
          <form onSubmit={(event) => props.handleFormSubmit(event)} name="query">
            <TextField className="text-field"
                       placeholder="Enter a search term"
                       name="searchText"
                       onChange={(event) => props.handleSearchBarChange(event)}
                       value={props.value}>
            </TextField>
            <IconButton className="search-bar-search-button" type="submit">
              <SearchIcon/>
            </IconButton>
          </form>
        </Paper>
        <FlatButton onClick={() => props.handleClearSearchResults()}
                    className="search-bar-clear-results"
                    primary={true}>
          Clear Search Results
        </FlatButton>
        <div className="search-bar-result-limit">
          <p>Max Results: </p>
          <TextField className="search-bar-result-limit-text-field"
                     placeholder="5"
                     name="limitResults"
                     type="number"
                     onChange={(event) => props.handleLimitResultChange(event)}
                     value={props.maxQueryResults}>
          </TextField>
        </div>
      </section>


  )

};

SearchBar.propTypes = {
  handleSearchBarChange: React.PropTypes.func.isRequired,
  handleFormSubmit: React.PropTypes.func.isRequired,
  handleClearSearchResults: React.PropTypes.func.isRequired,
  handleLimitResultChange: React.PropTypes.func.isRequired,
  maxQueryResults: React.PropTypes.number.isRequired,
  value: React.PropTypes.string
};

export default SearchBar;