import React from 'react';
import MovieList from './MovieList.js';
import exampleMovieData from '../exampleMovieData.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: props.exampleMovies
    };

    this.addMovie = this.addMovie.bind(this);
  };

  addMovie (movie){
    this.setState(
      {movies: [...this.movies, movie]},
      () => console.log('Movie has been added to list')
      )
  }



  render (){
    return(
      <div>
        <div>
          <MovieList movies={this.state.movies} addMovie={this.addMovie}/>
        </div>


      </div>
  )}
}

export default App;


// import from './main.css';
