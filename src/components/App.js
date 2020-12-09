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

    this.addMovie = this.addMovie.bind(this);
    this.searchPage = this.searchPage.bind(this);
  };


  addMovie (movie){
    this.setState({movies: [...this.movies, movie]}, () =>
    console.log('Movie has been added to list'))
  }

  searchPage (e){
    // update state search value
    // on click of button, make changes to movielist
    this.setState({value: e.target.value});
    console.log('typed!');
  }



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
            value={this.state.value}
          />
        </div>


      </div>
  )}
}

export default App;


// import from './main.css';
