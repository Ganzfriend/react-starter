import React from 'react';
import App from './App.js';

class InputMovies extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <input
        className="input-movie-bar"
        type="text"
        />
        <button className="add-button">
          Add
        </button>
      </div>

    );
  }

}

export default InputMovies;