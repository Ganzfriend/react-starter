import MakeMovieList from './MakeMovieList.js';

var MovieList = ({movies, addMovie}) => {
  return (
    <div className="container">
      <h2>Movie List</h2>
      <div>
        <MakeMovieList movies={movies}/>
      </div>
    </div>
  );
};


export default MovieList;

//in the returned div, we will build out all
//the inner components that need to be rendered

// in here, we will pass App's state with the array of videos to MakeMovieList