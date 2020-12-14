import React from 'react';
import MovieList from './MovieList.js';
import exampleMovieData from '../exampleMovieData.js';
import Search from './Search.js';
import InputMovies from './InputMovies.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      addMovieValue: 'Add movie title here',
      filter: 'all',
      query: ''
    };


    this.baseState = {
      movies: props.exampleMovies,
    };

    this.searchPage = this.searchPage.bind(this);
    this.findMovies = this.findMovies.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.switchToWatched = this.switchToWatched.bind(this);
    this.switchToUnwatched = this.switchToUnwatched.bind(this);
    this.switchToAll = this.switchToAll.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  };


//////////////// add movie functions /////////////////

  handleNewMovie (e) {
    this.setState({addMovieValue: e.target.value});
  }

  addMovie (movie) {
    var val = this.state.addMovieValue;
    if (val === 'Add movie title here' || val === '') {
      return;
    } else {
      var newMovie = {title: val, checked: false};
      this.setState({
        movies: [newMovie, ...this.state.movies],
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
    this.setState({query: e.target.value});
  }

  // findMovies will take in the value at the time of click and
  // change movie array in state according to what meets criteria
  findMovies (e) {
    var val = this.state.query;
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

  handleCheckbox (e) {
    var index = e.target.id;
    var moviesArr = [...this.state.movies];
    moviesArr[index].checked = !moviesArr[index].checked;

    this.setState({movies: moviesArr}, () => console.log(this.state.movies)
    );
  }



////////// toggle between Watch and To Watch buttons /////
  // this is still buggy
  // watched and not-watched (toWatch) arrays aren't
  // updating and/or rendering properly
  switchToWatched (e) {
    this.setState({
      filter: 'watched',
    });
  }

  switchToUnwatched (e) {
    this.setState({
      filter: 'unwatched',
    });
  }

  switchToAll (e) {
    this.setState({
      movies: [...this.state.watched, ...this.state.toWatch, ...this.baseState.movies]
    });
  }
//////////////////////////////////////////////////////////

  filterMovies () {
    switch (this.state.filter) {
      case 'all': return this.state.movies;
      case 'watched': {
        return this.state.movies.filter(movie => {
          return movie.checked;
        })
      }
      case 'unwatched': {
        return this.state.movies.filter(movie => {
          return !movie.checked;
        })
      }
    }
  }

/////////////////////////////////////////////////////////

  render (){
    return(
      <div>
        <div>
          <MovieList
            movies={this.filterMovies()}
            switchToWatched={this.switchToWatched}
            switchToUnwatched={this.switchToUnwatched}
            switchToAll={this.switchToAll}
            handleCheckbox={this.handleCheckbox}
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
