import React from 'react';

interface MovieCardProps {
    title: string;
    year: string;
    image: string;
}

const MovieCard: React.FC<MovieCardProps> = ({title, year, image}) => {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="Título do Filme" />
            <h3>{title}</h3>
            <p>{year}</p>
        </div>
    );
};

export default MovieCard;