// Importing necessary components
import React, { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieDisplay from './MovieDisplay';
import MovieList from './MovieList';
import DarkToLight from './DarkToLight';
import '../DarkToLight.css';

// Setting base URL and movies URL
const baseUrl = "http://localhost:3000";
const moviesUrl = baseUrl + "/movies";

function App() {
  // Setting states for the app
  // const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const [allMovies, setAllMovies] = useState([]);
  const [hideList, setHideList] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isDark, setIsDark] = useState(false);
  const [ radioBtn, setRadioBtn ] = useState( false );
  const [ movieSearch, setMovieSearch ] = useState( '' )

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  // useEffect hook to change body class based on dark mode state
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  // useEffect hook to fetch all movies on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  // Function to fetch all movies
  function fetchMovies() {
    fetch(moviesUrl)
      .then((response) => response.json())
      .then((movieData) => setAllMovies(movieData))
      .catch((error) => console.error(error));
  }

  // Function to handle changes in movie rating
  function handleRatingChange(event) {
    setRating(parseInt(event.target.radioBtn));
  }

  // Function to add a new movie
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

  // Function to toggle the visibility of the movie list
  function toggleHideList() {
    setHideList(!hideList);
  }

  // Function to change the selected movie
  function changeSelectedMovie(movie) {
    setSelectedMovie(movie);
  }

  // Changes selected radio buttons
  function changeRadioBtn(e) {
    setRadioBtn( e.target.value )
  }

  // Sets states for search bar
  function changeMovieSearch( event ) {
    setMovieSearch( event.target.value )
  }

  // Submits the users search bar request
  function movieSearchSubmit(e) {
    e.preventDefault()
    setMovieSearch( filterMovies )
  }

  //filter movies when searching in search bar
  const filterMovies = allMovies.filter( movie => movie.title.toLowerCase().includes(movieSearch.toLowerCase()))
  
  // Rendering the components and passing necessary props
  return (
    <div>
      <header>
        <DarkToLight 
          isDark={isDark} 
          toggleDarkMode={toggleDarkMode} 
        />
      </header>
      <MovieDisplay 
        rating={rating} 
        onSubmit={handleRatingChange} 
        selectedMovie={selectedMovie} 
      />
      <MovieForm 
        onSubmit={handleAddMovie} 
      />
      <div className="sidebar">
        <button onClick={() => toggleHideList()}>
          {hideList ? 'Show Movie List' : 'Hide Movie List'}
        </button>
        {hideList ? null : (
          <MovieList 
            allMovies={filterMovies} 
            changeSelectedMovie={changeSelectedMovie} 
            radioBtn={radioBtn}
            changeRadioBtn={changeRadioBtn}
            movieSearch={movieSearch}
            changeMovieSearch={changeMovieSearch}
            movieSearchSubmit={movieSearchSubmit}
          />
        )}
      </div>
    </div>
  );
}

// Exporting the App component
export default App;


//// broke off code below for later use (gets random pick from fetch)
  //     const randomIndex = Math.floor(Math.random() * data.movies.length);
  //     setMovie(data.movies[randomIndex]);
  //     })
  //   .catch(error => console.error(error));
  // 