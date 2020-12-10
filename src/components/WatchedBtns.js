import React from 'react';
import MovieList from './MovieList.js';

var WatchedBtns = ({watched, watchedBtn, toWatchBtn, switchWatchBtn}) => {
  return (
    <div>
      <button
        className="watched-btn"
        value={watchedBtn}
        onClick={(e) => switchWatchBtn(e)}
      >
        Watched
      </button>
      <button
        className="to-watch-btn"
        value={toWatchBtn}
        onClick={(e) => switchWatchBtn(e)}
      >
        To Watch
      </button>
    </div>
  );
};

export default WatchedBtns;