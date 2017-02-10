import React, { Component } from 'react';

class SearchBarForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ''

    };
  }


  handleSubmit(event) {
    event.preventDefault();

    const { title } = this.state;
    this.props.handleSearch(title);
    this.handleReset();
  //  console.log(title);
  }

  handleReset() {
    this.setState({
      title: []
    });
  }

  handleInputChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="user-search-form" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            title="title"
            value={this.state.title}
            onChange={this.handleInputChange.bind(this)}
          />
          <button className="search-button">Search</button>
        </form>
      </div>
    );
  }
}

SearchBarForm.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  // title: React.PropTypes.array.isRequired
};

export default SearchBarForm;
