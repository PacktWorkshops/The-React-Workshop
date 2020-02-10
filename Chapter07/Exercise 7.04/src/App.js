import React, { Component } from 'react';

class App extends Component {
  render() {
    const details = [
      {
        name: 'Tiger',
        number: 3890,
        endangered: true
      },
      {
        name: 'Brown Bear',
        number: 200000,
        endangered: false
      },
      {
        name: 'Red Panda',
        number: 10000,
        endangered: true
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
          <AnimalDetails detail={detail} key={index} />
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
        <p>Animal: {name}</p>
        <p>Number: {number}</p>
        <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
      </div>
    </li>
  );
};

export default App;
