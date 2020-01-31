import React from 'react';
import useFonts from './useFonts';

const FontList = props => {
  const fonts = useFonts(props.sort);

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
