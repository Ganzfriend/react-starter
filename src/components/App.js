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
      value: 'Search...',
      addMovieValue: 'Add movie title here',
      addedMovies: []
    };


    this.baseState = {
      movies: props.exampleMovies
    }

    this.searchPage = this.searchPage.bind(this);
    this.findMovies = this.findMovies.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
  };

  handleNewMovie (e) {
    this.setState({addMovieValue: e.target.value});
  }

  addMovie (movie) {
    var newMovie = {title: this.state.addMovieValue};
    console.log(newMovie);
    this.setState({addedMovies: [...this.state.addedMovies, newMovie]})

    this.setState({movies: this.state.addedMovies});
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
            addMovieValue={this.addMovieValue}
          />
          <div className="input-movies-form">
            <InputMovies
              movies={this.state.movies}
              handleNewMovie={this.handleNewMovie}
              addMovie={this.addMovie}
              addMovieValue={this.state.addMovieValue}
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
