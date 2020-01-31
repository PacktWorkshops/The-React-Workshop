import React, { Component } from 'react';

class App extends Component {
  render() {
    const details = {
      name: 'Tiger',
      number: 3890,
      endangered: true
    };
    return <Animal details={details} />;
    // return <Animal {...details} />;
  }
}

// Class-based component
export class Animal extends Component {
  render() {
    const { name, number, endangered } = this.props.details;
    // const { name, number, endangered } = props;

    return (
      <div>
        <p>Animal: {name}</p>
        <p>Number: {number}</p>
        <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}

// Functional component
// const Animal = props => {
//   const { name, number, endangered } = props.details;
//   return (
//     <div>
//       <p>Animal: {name}</p>
//       <p>Number: {number}</p>
//       <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
//     </div>
//   );
// };

export default App;
