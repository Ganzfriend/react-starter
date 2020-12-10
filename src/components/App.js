import React from 'react';
import MovieList from './MovieList.js';
import exampleMovieData from '../exampleMovieData.js';
import Search from './Search.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: props.exampleMovies,
      value: 'Search...'
    };

    this.baseState = {
      movies: props.exampleMovies
    }

    this.addMovie = this.addMovie.bind(this);
    this.searchPage = this.searchPage.bind(this);
    this.findMovies = this.findMovies.bind(this);
  };


  addMovie (movie){
    this.setState({movies: [...this.movies, movie]}, () =>
    console.log('Movie has been added to list'))
  }

  // searchPage is just allow the search form to be updated
  searchPage (e){
    // update state search value
    // on click of button, make changes to movielist
    this.setState({value: e.target.value});
    if (!this.value) {
      this.setState({movies: this.baseState.movies});
    }
    console.log('typed!');
  }

  // findMovies will take in the value at the time of click and
  // change movie array in state according to what meets criteria
  findMovies (e) {
    var val = this.state.value;
    var movies = this.state.movies;
    var searchedMovies = [];

    for (let i = 0; i < movies.length; i++) {
      var movie = movies[i].title;
      if (movie.indexOf(val) > -1) {
        searchedMovies.push(movies[i]);
      }
    }
    this.setState({movies: searchedMovies});
  }

  // need to revert to base state whenever search form is cleared




  render (){
    return(
      <div>
        <div>
          <MovieList
            movies={this.state.movies}
            addMovie={this.addMovie}
          />
        </div>
        <div>
          <Search
            searchPage={this.searchPage}
            findMovies={this.findMovies}
            value={this.state.value}
          />
        </div>
      </div>
  )}
}

export default App;


// import from './main.css';
