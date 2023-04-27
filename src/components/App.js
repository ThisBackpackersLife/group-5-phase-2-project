import React, { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieDisplay from './MovieDisplay';
import MovieList from './MovieList';
import WatchList from './WatchList';
import DarkToLight from './DarkToLight';
import '../DarkToLight.css';

const baseUrl = "http://localhost:3000";
const moviesUrl = baseUrl + "/movies";

function App() {
  // const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const [allMovies, setAllMovies] = useState([]);
  const [hideList, setHideList] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isDark, setIsDark] = useState(false);
  const [watchList, setWatchlist] = useState([]);


  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    fetchMovies();
  }, []);

  function fetchMovies() {
    fetch(moviesUrl)
    .then((response) => response.json())
    .then((movieData) => setAllMovies(movieData))
    .catch((error) => console.error(error));
  }
  function postRating(movieId, rating) {
    fetch(moviesUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ movieId, rating })
    })
      .then(response => response.json())
      .then(newRating => {
        console.log("Rating added:", newRating);
      })
      .catch(error => console.error(error));
  }
  
  function handleRatingChange(rating) {
    setRating(parseInt(rating));
    postRating(selectedMovie.id, rating);
  }
  

  function handleAddMovie(movieData) {
    fetch(moviesUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieData)
    })
      .then(response => response.json())
      .then(newMovie => {
        setAllMovies([...allMovies, newMovie]);
      })
      .catch(error => console.error(error));
  }

  function toggleHideList() {
    setHideList(!hideList);
  }

  function changeSelectedMovie(movie) {
    setSelectedMovie(movie);
  }
  const addToWatchlist = (movie) => {
    console.log("Adding movie to watchlist", movie);
    setWatchlist((prevWatchlist) => {
      if (prevWatchlist.some((m) => m.id === movie.id)) {
        return prevWatchlist;
      } else {
        return [...prevWatchlist, movie];
      }
    });
  };
  

  return (
    <div>
      <header>
        <DarkToLight isDark={isDark} toggleDarkMode={toggleDarkMode} />
      </header>
      <MovieDisplay
      rating={rating}
      onSubmit={handleRatingChange}
      selectedMovie={selectedMovie}
      onAddToWatchlist={addToWatchlist}
      watchlist={watchList}
      />


      <MovieForm onSubmit={handleAddMovie} />
      <div className="sidebar">
        <button onClick={() => toggleHideList()}>
          {hideList ? 'Show Movie List' : 'Hide Movie List'}
        </button>
        {hideList ? null : (
          <MovieList
            allMovies={allMovies}
            changeSelectedMovie={changeSelectedMovie}
            onAddToWatchlist={addToWatchlist} // Updated prop name
          />
        )}
      <WatchList watchlist={watchList} removeMovieFromWatchlist={(movieId) => {
      setWatchlist(watchList.filter(movie => movie.id !== movieId))}} />

      </div>
    </div>
  );}

export default App;
