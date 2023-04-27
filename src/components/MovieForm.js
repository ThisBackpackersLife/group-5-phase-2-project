import React, { useState } from "react";

function MovieForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const movieData = { title, description, year, genre, image };
    onSubmit(movieData);
    setTitle("");
    setDescription("");
    setYear("");
    setGenre("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type="text"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
      </label>
      <br />
      <label>
        Genre:
        <input
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Add Movie" />
    </form>
  );
}

export default MovieForm;