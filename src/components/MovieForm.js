function MovieForm({ movie, rating, handleRatingChange }) {
    return (
      <div>
        {movie ? (
          <form>
            <label>
              Rate this movie:
              <select value={rating} onChange={handleRatingChange}>
                <option value={0}>Select rating</option>
                <option value={1}>1 star</option>
                <option value={2}>2 stars</option>
                <option value={3}>3 stars</option>
                <option value={4}>4 stars</option>
                <option value={5}>5 stars</option>
              </select>
            </label>
            <input type="submit" value="Submit rating" />
          </form>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default MovieForm