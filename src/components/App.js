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
      // movies: [],
      value: 'Search...',
      addMovieValue: 'Add movie title here',
      toWatch: [],
      watched: [],
      watchedBtn: true,
      toWatchBtn: false,

    };


    this.baseState = {
      movies: props.exampleMovies,
      // movies: [],
      toWatch: []
    }

    this.searchPage = this.searchPage.bind(this);
    this.findMovies = this.findMovies.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.clearDefaultMovieVal = this.clearDefaultMovieVal.bind(this);
    this.clearDefaultSearchVal = this.clearDefaultSearchVal.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.switchToWatched = this.switchToWatched.bind(this);
    this.switchToUnwatched = this.switchToUnwatched.bind(this);
    this.switchToAll = this.switchToAll.bind(this);
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
      this.setState({movies: [...this.state.toWatch]});
    } else {
      var newMovie = {title: val};
      this.setState({
        toWatch: [newMovie, ...this.state.toWatch],
        movies: [newMovie, ...this.state.toWatch],
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
    if (!this.state.value) {
      var moviesAdded = this.state.toWatch.length > 0;
      if (moviesAdded) {
        this.setState({movies: [...this.state.toWatch]});
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
  // otherwise, add it, and remove it from toWatch
  onValueChange (e) {
    var v = e.target.value;
    var watched = this.state.watched;

    for (let i = 0; i < watched.length; i++) {
      let obj = watched[i];

      if (obj.title === v) {
        var newWatched = [...this.state.watched];
        newWatched.splice(i, 1);
        this.setState({
          watched: newWatched,
          toWatch: [...this.state.toWatch, {title: v}]
        });
        return;
      }
    }
    // otherwise, we know title was not found in watched
    // so, we'll remove it from toWatch and add to watched
    var toWatch =  [...this.state.toWatch];

    for (let j = 0; j < toWatch.length; j++) {
      let obj = toWatch[j];
      if (obj.title === v) {
        var newToWatch = [...this.state.toWatch];
        newToWatch.splice(j, 1);
        this.setState({
          watched: [...this.state.watched, {title: v}],
          toWatch: newToWatch
        });
        return;
      }
    }
  }
///////////////////////////////////////////////////////////


////////// toggle between Watch and To Watch buttons /////
  // this is still buggy
  // watched and not-watched (toWatch) arrays aren't
  // updating and/or rendering properly
  switchToWatched (e) {
    this.setState({
      movies: [...this.state.watched],
      watchedBtn: true,
      toWatchBtn: false
    });
  }

  switchToUnwatched (e) {
    this.setState({
      movies: [...this.state.toWatch],
      watchedBtn: false,
      toWatchBtn: true
    });

  }

  switchToAll (e) {
    let base = [...this.baseState.movies];
    let watched = [...this.state.watched];
    let toWatch = [...this.state.toWatch];
    let all = watched.concat(toWatch).concat(base);

    this.setState({
      movies: all
    });
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
            switchToWatched={this.switchToWatched}
            switchToUnwatched={this.switchToUnwatched}
            switchToAll={this.switchToAll}
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
