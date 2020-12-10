import React from 'react';
import App from './App.js';
import MovieList from './MovieList.js';


class Search extends React.Component {
  constructor (props) {
    super(props);

  };


  render () {
    return (
      <div className="search-form">
        <input
          type="text"
          className="search-bar"
          value={this.props.value}
          onChange={(e) => this.props.searchPage(e)}
        />
        <button
          className="search-button"
          onClick={(e) => this.props.findMovies(e)}
        >
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