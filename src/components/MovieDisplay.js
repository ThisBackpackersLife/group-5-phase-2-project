function MovieDisplay({ movie }) {
    return (
      <div>
        {movie ? (
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
          </div>
        ) : (
          <p>Loading Movie...</p>
        )}
      </div>
    );
  }
  
export default MovieDisplay