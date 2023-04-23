import React, { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieDisplay from './MovieDisplay';

const baseUrl = "http://localhost:3000"
const moviesUrl = baseUrl + "/movies"

function App() {
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);

  // Fetch a random movie from db.json on component mount
  useEffect( fetchMovies, [] );

  function fetchMovies() {
    fetch(moviesUrl)
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.movies.length);
      setMovie(data.movies[randomIndex]);
      })
    .catch(error => console.error(error));
  }
  

  // Handle rating change
  function handleRatingChange(event) {
    setRating(parseInt(event.target.value));
  }

  return (
    <div>
      <MovieDisplay movie={movie} />
      <MovieForm
        movie={movie}
        rating={rating}
        handleRatingChange={handleRatingChange}
      />
    </div>
  );
}

export default App;
