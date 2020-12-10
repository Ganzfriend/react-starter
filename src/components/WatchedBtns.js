import React from 'react';
import MovieList from './MovieList.js';

var WatchedBtns = ({watched, watchedBtn, toWatchBtn}) => {
  return (
    <div>
      <button
        className="watched-btn"
        value={watchedBtn}
      >
        Watched
      </button>
      <button
        className="to-watch-btn"
        value={toWatchBtn}
      >
        To Watch
      </button>
    </div>
  );
};

export default WatchedBtns;