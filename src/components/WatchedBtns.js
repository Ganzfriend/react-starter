import React from 'react';
import MovieList from './MovieList.js';

const WatchedBtns = ({watched, watchedBtn, toWatchBtn, switchToWatched, switchToUnwatched, switchToAll}) => {
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
        value={watchedBtn}
        onClick={(e) => switchToWatched(e)}
      >
        Watched
      </button>

      <button
        className="to-watch-btn tab"
        value={toWatchBtn}
        onClick={(e) => switchToUnwatched(e)}
      >
        To Watch
      </button>
    </div>
  );
};

export default WatchedBtns;