// Importing necessary components
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";

import '../DarkToLight.css';
import Watchlist from './Watchlist';
import NavBar from './NavBar';
import Home from './Home';
import DarkToLight from './DarkToLight';
import About from './About';



function App() {

  const [isDark, setIsDark] = useState(false);

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



    return (
    <div>
      <header>
        <DarkToLight 
          isDark={isDark} 
          toggleDarkMode={toggleDarkMode} 
        />
        </header>
        <NavBar />
        <Switch>
          <Route path="/watchlist">
            <Watchlist />;
          </Route>
          <Route path="/about">
            <About />;
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

    </div>
  )
}

// Exporting the App component
export default App;


//// broke off code below for later use (gets random pick from fetch)
  //     const randomIndex = Math.floor(Math.random() * data.movies.length);
  //     setMovie(data.movies[randomIndex]);
  //     })
  //   .catch(error => console.error(error));
  // 