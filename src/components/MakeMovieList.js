import React from 'react';
import MovieList from './MovieList.js';

var MakeMovieList = ({movies, onValueChange, checked}) => {
  // here, we want to map over passed in movies array (coming from App's state)
  // and we'll return each one in its own div
  // eventually, we'll be dealing with more information, not just the title
  // and we can have a separate component storing all the movie data in a full array of objects
  // App's state can keep track of all the movies titles, for now
  return (
    <div>
      {movies.map((movie, i) => (
        <div className="movie-box" key={i}>
          {movie.title}
          <label>
            <input
              type="checkbox"
              id={i}
              value="Watched"
              checked={checked}
              onChange={(e, i) => onValueChange(e, i)}
            />
            Watched
          </label>
        </div>
      ))}
    </div>
  );
};

export default MakeMovieList;