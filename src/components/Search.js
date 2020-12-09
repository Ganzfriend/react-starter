import React from 'react';
import App from './App.js';


class Search extends App {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Search...'
    };

    this.updateValue = this.updateValue.bind(this);

  };

  updateValue (e) {
    this.setState({
      value: e.target.value
    });
  }


  render () {
    return (
      <div>
        <input
          type="text"
          className="search-bar"
          value={this.state.value}
          onChange={() => this.updateValue()}>
        </input>
        <button>

        </button>
      </div>
    );
  }
}




export default Search;