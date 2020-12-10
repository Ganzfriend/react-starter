import React from 'react';
import MovieList from './MovieList.js';
import exampleMovieData from '../exampleMovieData.js';
import Search from './Search.js';
import InputMovies from './InputMovies.js';


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

  // searchPage just allows the search form to be updated
  searchPage (e){
    // update value state according to search input
    // reverts to base state whenever search form is cleared
    this.setState({value: e.target.value});
    if (!this.value) {
      this.setState({movies: this.baseState.movies});
    }
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
    // if no movie is found in search, alert
    if (searchedMovies.length > 0) {
      this.setState({movies: searchedMovies});
    } else {
      this.setState({movies: [{title: 'No movie by that name found. Sorry!'}]});

      // alert('No movie by that name found');
    }
  }


  render (){
    return(
      <div>
        <div>
          <MovieList
            movies={this.state.movies}
            addMovie={this.addMovie}
          />
          <div className="input-movies-form">
            <InputMovies
              movies={this.state.movies}
            />
          </div>
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
