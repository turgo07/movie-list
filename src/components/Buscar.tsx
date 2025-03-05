import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

interface Movie {
  original_title: string;
  release_date: string;
  poster_path: string | null;
}

const Buscar: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isSearchBarReady, setIsSearchBarReady] = useState(false);

  useEffect(() => {
    const searchBarContainer = document.getElementById('nav');
    if (searchBarContainer) {
      setIsSearchBarReady(true);
    }
  }, []);

  return (
    <>
      {isSearchBarReady && <SearchBar setMovies={setMovies} />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Buscar;