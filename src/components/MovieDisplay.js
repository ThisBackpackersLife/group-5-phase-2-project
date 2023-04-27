import React, { useState } from "react";

function MovieDisplay({ selectedMovie, onAddToWatchlist, onRemoveFromWatchlist, watchlist, rating, onSubmit }) {
  console.log("Selected movie:", selectedMovie);
  console.log("Watchlist:", watchlist);

  let { id, title, description, year, genre, image } = selectedMovie;

  const isMovieInWatchlist = watchlist?.some((movie) => movie.id === id);

  console.log("Is movie in watchlist?", isMovieInWatchlist);

  const handleAddToWatchlist = () => {
    console.log("Adding movie to watchlist...");
    onAddToWatchlist(selectedMovie);
  };

  return (
    <div>
      {selectedMovie ? (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{year}</p>
          <p>{genre}</p>
          <img src={image} alt={title} />
          <form onSubmit={(e) => {e.preventDefault(); onSubmit();}}>
            <label>
              Rating:
              <input type="number" min="1" max="5" value={rating} onChange={(e) => onSubmit(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
          </form>
          {isMovieInWatchlist ? (
            <button onClick={() => onRemoveFromWatchlist(id)}>Remove from Watchlist</button>
          ) : (
            <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
          )}
        </div>
      ) : (
        <p>Loading Movie...</p>
      )}
    </div>
  );
}


export default MovieDisplay;
