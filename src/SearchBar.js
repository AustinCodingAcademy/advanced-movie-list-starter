import React from 'react';

const SearchBar = props => {
    return (
      <div>
        <input type="text"
          placeholder="Search by title..."
          value={props.value}
          onChange={event => props.onChange(event)}></input>
        <div id="send-search" onClick={value => props.handleSearch(props.value)}>
          <span className="fa fa-search"></span>
        </div>
      </div>
    )
}

SearchBar.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func
};

export default SearchBar;
