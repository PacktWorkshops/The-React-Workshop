import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState(0);

  const submitForm = e => {
    e.preventDefault();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=your-api-key&units=metric`;

    axios
      .get(url)
      .finally(() => {
        console.log('loading');
      })
      .then(res => {
        console.log(res);
        setTemp(res.data.main.temp);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='page'>
      <div className='box'>
        <form onSubmit={submitForm} className='weather-form'>
          <label htmlFor='city'>City name: </label>
          <input
            type='text'
            id='city'
            placeholder='Type a city'
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <button className='weather-button'>Get temperature</button>
        </form>
        <div className='temp'>{temp} &#8451;</div>
      </div>
    </div>
  );
};

export default App;
