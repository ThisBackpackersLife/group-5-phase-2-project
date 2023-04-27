import React from "react";
import MovieDisplay from "./MovieDisplay";
function MovieList({ allMovies, changeSelectedMovie }) {
    //const clickMovie()
    const renderMovieList = allMovies.map( movie => {
        return (
        <li>
            <strong>{ movie.title }</strong>
            <button onClick={ () => selectMovie( movie ) }>More Info</button>
        </li>
        )
    })
    const selectMovie = movie => (
        changeSelectedMovie(movie)
        )
    return (
        <div className="movie-list">
            <span>
                <h1>Movie List</h1>
                <li>
                    { renderMovieList }
                </li>
            </span>
        </div>
    )
}
export default MovieList;