import React, { Component } from 'react';

class App extends Component {
  render() {
    const details = [
      {
        name: 'Tiger',
        number: 3890,
        endangered: true,
        photo: 'https://source.unsplash.com/Si6Obte6Bu0/200x100'
      },
      {
        name: 'Brown Bear',
        number: 200000,
        endangered: false,
        photo: 'https://source.unsplash.com/c8XlAc1akIU/200x100'
      },
      {
        name: 'Red Panda',
        number: 10000,
        endangered: true,
        photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100'
      }
    ];

    return (
      <Animal details={details}>
        <h1>Endangered Animals</h1>
      </Animal>
    );
  }
}

const Animal = props => {
  const details = props.details;

  return (
    <div>
      {props.children}
      <ul>
        {details.map((detail, index) => (
          <AnimalDetails
            image={<Photo path={detail.photo} title={detail.name} />}
            detail={detail}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

const AnimalDetails = props => {
  const { name, number, endangered } = props.detail;

  return (
    <li>
      <div>
        <p>{props.image}</p>
        <p>Animal: {name}</p>
        <p>Number: {number}</p>
        <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
      </div>
    </li>
  );
};

const Photo = props => {
  return <img src={props.path} alt={props.name} />;
};

export default App;
