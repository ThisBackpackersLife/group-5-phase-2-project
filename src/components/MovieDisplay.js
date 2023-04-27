import React from "react";

function MovieDisplay({ rating, handleRatingChange, selectedMovie }) {

  let { title, description, year, genre, image } = selectedMovie

  return (
    <div>
      {selectedMovie ? (
        <div>
          <h1>{ title }</h1>
          <p>{ description }</p>
          <p>{ year }</p>
          <p>{ genre }</p>
          <img src={ image } alt={ title } />
          <form>
            <label>
              Rate this movie:
              <select value={rating} onChange={handleRatingChange}>
                <option value={0}>Select rating</option>

                <option value={1}>🥔</option>
                <option value={2}>🥔🥔</option>
                <option value={3}>🥔🥔🥔</option>
                <option value={4}>🥔🥔🥔🥔</option>
                <option value={5}>🥔🥔🥔🥔🥔</option>

                {/* <option value={1}>1 🎃</option>
                <option value={2}>2 🎃</option>
                <option value={3}>3 🎃</option>
                <option value={4}>4 🎃</option>
                <option value={5}>5 🎃</option> */}
              </select>
            </label>
            <input type="submit" value="Submit rating" />
          </form>
        </div>
      ) : (
        <p>Loading Movie...</p>
      )}
    </div>
  );
}

export default MovieDisplay;