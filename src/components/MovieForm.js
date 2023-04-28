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
  }}
  export default MovieForm