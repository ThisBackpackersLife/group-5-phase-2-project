import React from "react";

function MovieList({ allMovies }) {
    
    const renderMovies = allMovies.map( movie =>
        <movieCard 
        
        />
    )

    return (
        <div className="movie-list">
            <span>
                <h1>~Hideable~ Movie List</h1>
            </span>
        </div>
    )
}

export default MovieList;