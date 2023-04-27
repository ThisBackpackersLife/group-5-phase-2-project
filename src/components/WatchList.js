import React from 'react';

function Watchlist({ watchlist = [], removeMovieFromWatchlist = () => {} }) {
  return (
    <div>
      <h2>Watchlist</h2>
      {Array.isArray(watchlist) && watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <ul>
          {watchlist.map((movie) => (
            <li key={movie.id}>
              {movie.title}
              <button onClick={() => removeMovieFromWatchlist(movie.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Watchlist;
