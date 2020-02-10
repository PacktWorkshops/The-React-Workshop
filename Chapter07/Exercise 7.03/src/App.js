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

// Class-based component
class Animal extends Component {
  render() {
    const details = this.props.details;
    const listDetails = details.map((detail, index) => (
      <li>
        <div>
          <p>Animal: {detail.name}</p>
          <p>Number: {detail.number}</p>
          <p>Endangered: {detail.endangered ? 'Yes' : 'No'}</p>
        </div>
      </li>
    ));

    return (
      <div>
        {this.props.children}
        <ul>{listDetails}</ul>
      </div>
    );
  }
}

// Function component
// const Animal = props => {
//   const details = props.details;
//   return (
//     <div>
//       {props.children}
//       <ul>
//         {details.map((detail, index) => (
//           <li key={index}>
//             <div>
//               <p>Animal: {detail.name}</p>
//               <p>Number: {detail.number}</p>
//               <p>Endangered: {detail.endangered ? 'Yes' : 'No'}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default App;
