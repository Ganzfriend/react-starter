import React from 'react';
import MovieList from './MovieList.js';

const WatchedBtns = ({switchToWatched, switchToUnwatched, switchToAll}) => {
  return (
    <div>
      <button
        className="all-btn tab"
        onClick={(e) => switchToAll(e)}
      >
        All Movies
      </button>

      <button
        className="watched-btn tab"
        onClick={(e) => switchToWatched(e)}
      >
        Watched
      </button>

      <button
        className="to-watch-btn tab"
        onClick={(e) => switchToUnwatched(e)}
      >
        To Watch
      </button>
    </div>
  );
};

export default WatchedBtns;