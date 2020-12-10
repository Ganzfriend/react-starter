import React from 'react';
import MakeMovieList from './MakeMovieList.js';
import Search from './Search.js';
import WatchedBtns from './WatchedBtns.js';

const MovieList = ({movies, addMovie, onValueChange, watched, watchedBtn, toWatchBtn, switchToWatched, switchToUnwatched, switchToAll}) => {
  return (
    <div className="container">
      <div className="title-bar">
        <h2>MovieList</h2>
      </div>
      <div className="list-of-titles">
        <div>
          <WatchedBtns
            watched={watched}
            watchedBtn={watchedBtn}
            toWatchBtn={toWatchBtn}
            switchToWatched={switchToWatched}
            switchToUnwatched={switchToUnwatched}
            switchToAll={switchToAll}
          />
        </div>
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