import MovieList from './MovieList.js';

var MakeMovieList = {movies} => {
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
        </div>
      ))}
    </div>
  );
};

export default MakeMovieList;