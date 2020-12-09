import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import exampleMovieData from './exampleMovieData.js';
import './main.css';


ReactDOM.render(<App exampleMovies={exampleMovieData}/>, document.getElementById('app'));
