// Importing necessary components
import React from 'react';
import { Route, Switch } from "react-router-dom";
import MovieList from './MovieList';
import '../DarkToLight.css';
import Watchlist from './WatchList';
import NavBar from './NavBar';
import Home from './Home';



function App() {

    return (
    <div>
        <NavBar />
        <Switch>
          <Route path="/watchlist">
            <Watchlist />;
          </Route>
          <Route path="/movielist">
            <MovieList />;
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