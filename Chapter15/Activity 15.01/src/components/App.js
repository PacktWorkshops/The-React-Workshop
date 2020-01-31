import React, { useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

const API_KEY = '12345';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [credits, setCredits] = useState([]);

  const getMovies = async e => {
    e.preventDefault();

    const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    try {
      const res = await axios.get(moviesUrl);
      const displayMovies = res.data.results.slice(0, 5);
      setMovies(displayMovies);

      const creditPromise = await displayMovies.map(async movie => {
        const creditUrl = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`;
        const creditRes = await axios.get(creditUrl);

        return { movieId: movie.id, credits: creditRes.data.cast.slice(0, 3) };
      });

      const creditArray = await Promise.all(creditPromise);
      setCredits(creditArray);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='page'>
      <h1>5 Most Popular Movies Now</h1>

      <form onSubmit={getMovies}>
        <button className='button'>Get Now</button>
      </form>

      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <Movie movie={movie} credits={credits} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
