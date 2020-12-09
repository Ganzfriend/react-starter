import React from 'react';
import App from './App.js';
import MovieList from './MovieList.js';


class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 'Search...'
    };
  };

  render () {
    return (
      <div>
        <input
          type="text"
          className="search-bar"
          value={this.state.value}
          onChange={() => this.props.searchPage()}>
        </input>
        <button
          onClick={() => console.log('button clicked!')}>
          Go!
        </button>
      </div>
    );
  }

}




export default Search;

 // updateValue (e) {
  //   this.setState({
  //     value: e.target.value
  //   });
  // }