import React, { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieDisplay from './MovieDisplay';
import MovieList from './MovieList';

const baseUrl = "http://localhost:3000"
const moviesUrl = baseUrl + "/movies"

function App() {
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);

  // state for rendering all movies
  const [ allMovies, setAllMovies ] = useState( [] )
  
  // state for hiding the list of movies
  const [ hideList, setHideList ] = useState( false )

  // Fetch's all movies from db.json
  useEffect( fetchMovies, [] );

  function fetchMovies() {
    fetch(moviesUrl)
    .then(response => response.json())
    .then(movieData => setAllMovies(movieData))
  }

  // broke off code below for later use (gets random pick from fetch)
  //     const randomIndex = Math.floor(Math.random() * data.movies.length);
  //     setMovie(data.movies[randomIndex]);
  //     })
  //   .catch(error => console.error(error));
  // 
  

  // Handle rating change
  function handleRatingChange(event) {
    setRating(parseInt(event.target.value));
  }

  // Toggle hide movie list
  function toggleHideList() {
    setHideList(!hideList)
  }

  return (
    <div>
      <MovieDisplay 
        movie={movie} 
      />
      <MovieForm
        movie={movie}
        rating={rating}
        handleRatingChange={handleRatingChange}
      />
      <div className="sidebar">
        <button 
          onClick={ () => toggleHideList() }
          >Show/hide Movie List
        </button>
        {hideList ? <MovieList allMovies={ allMovies } /> : null}
      </div>
    </div>
  );
}

export default App;
