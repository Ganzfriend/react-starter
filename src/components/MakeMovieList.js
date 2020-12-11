import React from 'react';
import MovieList from './MovieList.js';

const MakeMovieList = ({movies, handleCheckbox}) => {
  if (movies === 'No movie by that name found. Sorry!') {
    return (
      <div className="sorry-msg">
        No movie by that name found. Sorry!
      </div>
    );
  }
  // here, we want to map over passed in movies array (coming from App's state)
  // and we'll return each one in its own div
  // eventually, we'll be dealing with more information, not just the title
  // and we can have a separate component storing all the movie data in a full array of objects
  // App's state can keep track of all the movies titles, for now
  return (
    <div>
      {movies.map((movie, i) => (
        <div className="movie-box" key={movie.title}>
          {movie.title}
          <label className="watched-label">
            <input
              className="check-watched"
              type="checkbox"
              id={i}
              value={movie.title}
              checked={movie.checked}
              onChange={(e) => handleCheckbox(e)}
            />
            Watched
          </label>
        </div>
      ))}
    </div>
  );
};

export default MakeMovieList;