import React from 'react';
import MakeMovieList from './MakeMovieList.js';
import Search from './Search.js';

var MovieList = ({movies, addMovie, onValueChange, watched}) => {
  return (
    <div className="container">
      <div className="title-bar">
        <h2>MovieList</h2>
      </div>
      <div className="list-of-titles">
        <MakeMovieList
          movies={movies}
          onValueChange={onValueChange}
          watched={watched}
        />
      </div>
    </div>
  );
};


export default MovieList;

//in the returned div, we will build out all
//the inner components that need to be rendered

// in here, we will pass App's state with the array of videos to MakeMovieList