import React from "react";

function Search({ movieSearch, changeMovieSearch, movieSearchSubmit }) {
  

  return (
    <form 
        className="searchbar" 
        onSubmit={(e) => movieSearchSubmit(e)}
    >
        <input
            type="text"
            id="search"
            placeholder="Search Movies"
            value={ movieSearch }
            onChange={ changeMovieSearch }
        />
        <button 
            type="submit"
            >🔍
        </button>
    </form>
  );
}

export default Search;