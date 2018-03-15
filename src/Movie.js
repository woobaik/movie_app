import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
      <MoviePoster />
      <h2>Hello, this is a movie</h2>
      </div>
    );
  }
}


class MoviePoster extends Component {
  render() {
    return (
      <img src="https://i.ytimg.com/vi/zNCz4mQzfEI/maxresdefault.jpg"/>
    );
  }

}
export default Movie;
