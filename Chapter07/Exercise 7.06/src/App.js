import React, { Component } from 'react';

class App extends Component {
  render() {
    const details = [
      {
        name: 'Tiger',
        number: 3890,
        endangered: true,
        photo: 'https://source.unsplash.com/Si6Obte6Bu0/400x300',
        donation: 100,
      },
      {
        name: 'Brown Bear',
        number: 200000,
        endangered: false,
        photo: 'https://source.unsplash.com/c8XlAc1akIU/400x300',
        donation: 10,
      },
      {
        name: 'Red Panda',
        number: 10000,
        endangered: true,
        photo: 'https://source.unsplash.com/2zYHKx8jtvU/400x300',
        donation: 50,
      },
    ];

    return (
      <Animal details={details}>
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
      const donationColor = donationAmout > 50 ? 'green' : 'red';
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
  const { name, number, endangered, donation } = props.detail;

  return (
    <li>
      <div>
        <p>{props.image}</p>
        <p>Animal: {name}</p>
        <p>Number: {number}</p>
        <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
        <p style={{ color: props.donationColor }}>
          Donation amount: <span className='donation-color'>${donation}</span>
        </p>
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
            image={<Photo path={detail.photo} title={detail.name} />}
            detail={detail}
            key={index}
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
