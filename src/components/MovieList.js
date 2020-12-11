import React from 'react';
import MakeMovieList from './MakeMovieList.js';
import Search from './Search.js';
import WatchedBtns from './WatchedBtns.js';

const MovieList = ({movies, addMovie, switchToWatched, switchToUnwatched, switchToAll, handleCheckbox}) => {
  return (
    <div className="container">
      <div className="title-bar">
        <h2>MovieList</h2>
      </div>
      <div className="list-of-titles">
        <div>
          <WatchedBtns
            switchToWatched={switchToWatched}
            switchToUnwatched={switchToUnwatched}
            switchToAll={switchToAll}
          />
        </div>
        <MakeMovieList
          movies={movies}
          handleCheckbox={handleCheckbox}
        />
      </div>
    </div>
  );
};


export default MovieList;

//in the returned div, we will build out all
//the inner components that need to be rendered

// in here, we will pass App's state with the array of videos to MakeMovieList