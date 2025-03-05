import React from "react";
import ReactDOM from "react-dom";
import MovieCard from "./MovieCard";

interface Movie {
  original_title: string;
  release_date: string;
  poster_path: string | null;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return ReactDOM.createPortal(
    <>
        <div className="movie-list">
            {movies.map((movie, index) => (
                <MovieCard
                key={index}
                title={movie.original_title}
                year={movie.release_date}
                image={movie.poster_path ?? "0"}
                />
            ))}
        </div>
    </>, document.getElementById('movies') as HTMLDivElement
  );
};

export default MovieList;