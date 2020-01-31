import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '12345';

const FontList = props => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const getFonts = async () => {
      // 1. Fetch data with axios
      const res = await axios.get(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=${props.sort}`
      );

      // 2. Update state
      setFonts(res.data.items.slice(0, 10));
    };

    getFonts();
  }, [props.sort]);

  return (
    <div className='card'>
      {fonts.map((font, index) => (
        <a
          href={`https://fonts.google.com/specimen/${font.family.replace(
            ' ',
            '+'
          )}`}
          className='card__item'
          key={index}
        >
          {font.family}
        </a>
      ))}
    </div>
  );
};

export default FontList;
