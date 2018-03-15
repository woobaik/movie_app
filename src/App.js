import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  'Matrix',
  'Okja',
  'Titanic',
  'Body Guard'
]

const movieImage = [
  'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
  'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMTcxNDgxN15BMl5BanBnXkFtZTgwOTczNTIzMjI@._V1_UX182_CR0,0,182,268_AL_.jpg',
  'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/The_Bodyguard_1992_Film_Poster.jpg/220px-The_Bodyguard_1992_Film_Poster.jpg'


]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title= {movies[0]} poster= {movieImage[0]}/>
        <Movie title= {movies[1]} poster= {movieImage[1]}/>
        <Movie title= {movies[2]} poster= {movieImage[2]}/>
        <Movie title= {movies[3]} poster= {movieImage[3]}/>
        <Movie title= {movies[4]} poster= {movieImage[4]}/>


      </div>
    );
  }
}

export default App;

/*
https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg

https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg


*/
