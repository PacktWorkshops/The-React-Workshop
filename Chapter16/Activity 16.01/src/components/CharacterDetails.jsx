import React from 'react';
import useFetch from './useFetch';

const CharacterDetails = ({ characterId }) => {
  const details = useFetch(`characters/${characterId}`);

  return (
    <ul>
      {details.role && <li>Role: {details.role}</li>}
      {details.house && <li>House: {details.house}</li>}
    </ul>
  );
};

export default CharacterDetails;
