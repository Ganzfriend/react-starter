import React from 'react';
import App from './App.js';

class InputMovies extends React.Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
      <div>
        <input
          className="input-movie-bar"
          type="text"
          value={this.props.addMovieValue}
          onClick={(e) => this.props.clearDefaultMovieVal(e)}
          onChange={(e) => this.props.handleNewMovie(e)}
        />
        <button
          className="add-button"
          onClick={(e) => this.props.addMovie(this.props.addMovieValue)}
        >
          Add
        </button>
      </div>

    );
  }

}

export default InputMovies;