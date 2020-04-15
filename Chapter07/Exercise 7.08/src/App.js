import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [
        {
          id: '1',
          name: 'Tiger',
          number: 3890,
          endangered: true,
          photo: 'https://source.unsplash.com/Si6Obte6Bu0/200x100',
          donation: 100,
        },
        {
          id: '2',
          name: 'Brown Bear',
          number: 200000,
          endangered: false,
          photo: 'https://source.unsplash.com/c8XlAc1akIU/200x100',
          donation: 10,
        },
        {
          id: '3',
          name: 'Red Panda',
          number: 10000,
          endangered: true,
          photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100',
          donation: 50,
        },
      ],
    };
  }

  removeList(id) {
    this.setState((prevState) => {
      const list = prevState.details.filter((item) => item.id !== id);
      return { ...prevState, details: list };
    });
  }

  render() {
    return (
      <Animal
        details={this.state.details}
        removeList={this.removeList.bind(this)}
      >
        <h1>Endangered Animals</h1>
      </Animal>
    );
  }
}

const withDonationColor = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { donationColor: 'black' };
    }

    componentDidMount() {
      const donationAmout = this.props.detail.donation;
      const donationColor = donationAmout > 51 ? 'green' : 'red';
      this.setState({ donationColor });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          donationColor={this.state.donationColor}
        />
      );
    }
  };
};

const AnimalDetails = (props) => {
  const { id, name, number, endangered, donation } = props.detail;

  return (
    <li key={id}>
      <div>
        <p>{props.image}</p>
        <p>Animal: {name}</p>
        <p>Number: {number}</p>
        <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
        <p style={{ color: props.donationColor }}>
          Donation amount: {donation}
        </p>
        <button onClick={() => props.removeList(id)}>
          Remove from the list
        </button>
      </div>
    </li>
  );
};

const WrapperComponent = withDonationColor(AnimalDetails);

const Animal = (props) => {
  const details = props.details;

  return (
    <div>
      {props.children}
      <ul>
        {details.map((detail, index) => (
          <WrapperComponent
            key={index}
            image={<Photo path={detail.photo} title={detail.name} />}
            detail={detail}
            index={index}
            removeList={props.removeList}
          />
        ))}
      </ul>
    </div>
  );
};

const Photo = (props) => {
  return <img src={props.path} alt={props.name} />;
};

export default App;
