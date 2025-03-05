import React, { useState } from "react";
import ReactDOM from 'react-dom';
import fetchMovies from "../services/api";
import GoogleLoginButton from "./GoogleLogin";

interface Movie {
  original_title: string;
  release_date: string;
  poster_path: string | null;
}

interface SearchBarProps {
  setMovies: (movies: Movie[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setMovies }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFetchMovies = async () => {
    const results = await fetchMovies(inputValue);
    setMovies(results);
  };

  return ReactDOM.createPortal(
    <>
      <div id='search-input'>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleFetchMovies()}
          placeholder="Pesquisar filme em MovieList"
        />
        <button onClick={handleFetchMovies}>
          <img width="20" height="20" src="/icons8-search.svg" alt="search--v1"/>
        </button>
      </div>
      <GoogleLoginButton />
    </>,
    document.getElementById('nav') as HTMLElement
  );
};

export default SearchBar;
