import React from "react";

function MovieForm({ movie, rating, handleRatingChange }) {
    return (
      <div>
        {movie ? (
          <form>
            <label>
              Rate this movie:
              <select value={rating} onChange={handleRatingChange}>
                <option value={0}>Select rating</option>

                <option value={1}>🎃</option>
                <option value={2}>🎃🎃</option>
                <option value={3}>🎃🎃🎃</option>
                <option value={4}>🎃🎃🎃🎃</option>
                <option value={5}>🎃🎃🎃🎃🎃</option>

                <option value={1}>1 🎃</option>
                <option value={2}>2 🎃</option>
                <option value={3}>3 🎃</option>
                <option value={4}>4 🎃</option>
                <option value={5}>5 🎃</option>

              </select>
            </label>
            <input type="submit" value="Submit rating" />
          </form>
        ) : (
          <p>Loading Rating...</p>
        )}
      </div>
    );
  }
  
  export default MovieForm