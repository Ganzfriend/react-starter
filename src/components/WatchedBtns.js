import React from 'react';
import MovieList from './MovieList.js';

var WatchedBtns = ({watched, watchedBtn, toWatchBtn, switchToWatched, switchToUnwatched}) => {
  return (
    <div>
      <button
        className="watched-btn"
        value={watchedBtn}
        onClick={(e) => switchToWatched(e)}
      >
        Watched
      </button>
      <button
        className="to-watch-btn"
        value={toWatchBtn}
        onClick={(e) => switchToUnwatched(e)}
      >
        To Watch
      </button>
    </div>
  );
};

export default WatchedBtns;