import React, { Fragment } from 'react';

const Credit = ({casts}) => {
  if (casts == null) return <Fragment/>;

  return(
    <Fragment>
      {casts.map((cast, index) => (
        <li key={index}>
          <div>{cast.name}</div>
          <div><img width="70" src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={cast.name} /></div>
        </li>
      ))}
    </Fragment>
  );
};

export default Credit;
