import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [

  {
    title: "Matrix",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
  },

  {
    title: "Okja",
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMTcxNDgxN15BMl5BanBnXkFtZTgwOTczNTIzMjI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },

  {
    title: 'Titanic',
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },

  {
    title: 'BodyGuard',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/The_Bodyguard_1992_Film_Poster.jpg/220px-The_Bodyguard_1992_Film_Poster.jpg'
  }

]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title= {movie.title} image= {movie.image} key= {index}/>
        })

        }

      </div>
    );
  }
}

export default App;
