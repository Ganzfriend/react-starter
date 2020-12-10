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
      addedMovies: [],
      watched: [],
      watchedBtn: true,
      toWatchBtn: false,
    };


    this.baseState = {
      movies: props.exampleMovies,
      addedMovies: []
    }

    this.searchPage = this.searchPage.bind(this);
    this.findMovies = this.findMovies.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.clearDefaultMovieVal = this.clearDefaultMovieVal.bind(this);
    this.clearDefaultSearchVal = this.clearDefaultSearchVal.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.switchWatchBtn = this.switchWatchBtn.bind(this);
  };

/////////////// clear input forms //////////
  clearDefaultMovieVal (e) {
    this.setState({addMovieValue: ''});
  }

  clearDefaultSearchVal (e) {
    this.setState({value: ''});
  }
////////////////////////////////////////////


//////////////// add movie functions /////////////////

  handleNewMovie (e) {
    this.setState({addMovieValue: e.target.value});
  }

  addMovie (movie) {
    var val = this.state.addMovieValue;
    if (val === 'Add movie title here' || val === '') {
      this.setState({movies: this.state.addedMovies});
    } else {
      var newMovie = {title: val};
      this.setState({
        addedMovies: [newMovie, ...this.state.addedMovies],
        movies: [newMovie, ...this.state.addedMovies],
        addMovieValue: 'Add movie title here'
      })
    }
  }
///////////////////////////////////////////////////////////

/////////////// search bar functions ///////////////////////

  // searchPage grabs input value from search bar
  // updates value state according to search input
  // reverts to base state whenever search form is cleared
  searchPage (e){
    this.setState({value: e.target.value});
    if (!this.value) {
      var moviesAdded = this.state.addedMovies.length > 0;
      if (moviesAdded) {
        this.setState({movies: [...this.state.addedMovies]});
      } else {
        this.setState({movies: this.baseState.movies});
      }
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
    // if no movie is found in search, apology message appears
    if (searchedMovies.length > 0) {
      this.setState({
        movies: searchedMovies,
        value: 'Search...'
      });
    } else {
      this.setState({
        movies: 'No movie by that name found. Sorry!',
        value: 'Search...'
      });
    }
  }
////////////////////////////////////////////////////////


////////////// toggle watched property on each movie /////

  // if title of item is in watched array, remove it
  // otherwise, add it, and remove it from addedMovies
  onValueChange (e) {
    var v = e.target.value;
    var i = this.state.watched.indexOf(v);

    if (i < 0) {
      var newAddedMovies = [...this.state.addedMovies];
      newAddedMovies.splice(i, 1);

      this.setState({
        watched: [...this.state.watched, v],
        addedMovies: newAddedMovies
      });
    } else {
      var newWatched = [...this.state.watched];
      newWatched.splice(i, 1);

      this.setState({
        watched: newWatched,
        addedMovies: [...this.state.addedMovies, v]
      });
    }
  }
///////////////////////////////////////////////////////////


////////// toggle between Watch and To Watch buttons /////
  switchWatchBtn (e) {
    // first, we'll change the view
    // then we'll update state
    // var val = e.target.value;
    if (!this.state.watchedBtn) {
      this.setState({
        movies: [...this.state.watched],
        watchedBtn: !this.state.watchedBtn,
        toWatchBtn: !this.state.toWatchBtn
      });
    } else {
      this.setState({
        movies: [...this.state.addedMovies, ...this.baseState.movies],
        watchedBtn: !this.state.watchedBtn,
        toWatchBtn: !this.state.toWatchBtn
      });
    }
  }
//////////////////////////////////////////////////////////


  render (){
    return(
      <div>
        <div>
          <MovieList
            movies={this.state.movies}
            onValueChange={this.onValueChange}
            watched={this.state.watched}
            watchedBtn={this.state.watchedBtn}
            toWatchBtn={this.state.toWatchBtn}
            switchWatchBtn={this.switchWatchBtn}
          />
          <div className="input-movies-form">
            <InputMovies
              movies={this.state.movies}
              handleNewMovie={this.handleNewMovie}
              addMovie={this.addMovie}
              addMovieValue={this.state.addMovieValue}
              clearDefaultMovieVal={this.clearDefaultMovieVal}
            />
          </div>
        </div>
        <div>
          <Search
            searchPage={this.searchPage}
            findMovies={this.findMovies}
            value={this.state.value}
            clearDefaultSearchVal={this.clearDefaultSearchVal}
          />
        </div>
      </div>
  )}
}

export default App;
