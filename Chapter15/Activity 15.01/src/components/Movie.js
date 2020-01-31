import React from 'react';
import Credit from './Credit';

const Movie = ({ movie, credits }) => {
  const getCredits = movieId => {
    const value = credits.find(o => o.movieId === movieId);

    if (value === undefined) return;

    return value.credits;
  };

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <h2>{movie.title}</h2>
      <ul>
        <Credit casts={getCredits(movie.id)} />
      </ul>
    </div>
  );
};

export default Movie;
