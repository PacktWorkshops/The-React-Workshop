import React, { useState } from 'react';
import useFetch from './useFetch';
import CharacterDetails from './CharacterDetails';

const SearchResults = ({ searchCharacters }) => {
  const [characterId, setCharacterId] = useState([]);
  const characters = useFetch(searchCharacters);

  if (!characters.length) return <div></div>;

  const displayChar = characters[0].members
    ? characters[0].members
    : characters;

  const getDetails = id => {
    setCharacterId([...characterId, id]);
  };

  return (
    <div className="character">
      {displayChar.map(character => (
        <button
          className="character__box"
          key={character._id}
          onClick={() => getDetails(character._id)}
        >
          <div className="character__name">{character.name}</div>
          {characterId.map(
            id =>
              id === character._id && (
                <CharacterDetails key={id} characterId={id} />
              )
          )}
        </button>
      ))}
    </div>
  );
};

export default SearchResults;
