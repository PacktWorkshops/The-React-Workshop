import React, { useState } from 'react';
import useFetch from './useFetch';
import { colorConverter } from './utils';
import Characters from './Characters';
import './App.css';

const App = () => {
  const [searchCharacters, setSearchCharacters] = useState('characters');
  const houses = useFetch('houses');

  const updateHouse = id => {
    console.log(id);
    setSearchCharacters(`houses/${id}`);
  };

  return (
    <div className='container'>
      <div className='house'>
        {houses.map(house => (
          <button
            key={house._id}
            className='house__button'
            style={{
              backgroundColor: colorConverter(house.colors[0]),
              color: colorConverter(house.colors[1])
            }}
            onClick={() => updateHouse(house._id)}
          >
            {house.name}
          </button>
        ))}
      </div>
      <Characters searchCharacters={searchCharacters} />
    </div>
  );
};

export default App;
