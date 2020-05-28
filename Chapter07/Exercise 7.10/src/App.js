import React, { Component } from 'react';
import './styles.css';

// New data to add
// Orangutan
// 6600
// true
// https://source.unsplash.com/nAzqRaWJdhY/200x100
// 200

const CountContext = React.createContext(0);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [
        {
          id: 1,
          name: 'Tiger',
          number: 3890,
          endangered: true,
          photo: 'https://source.unsplash.com/Si6Obte6Bu0/200x100',
          donation: 100
        },
        {
          id: 2,
          name: 'Brown Bear',
          number: 200000,
          endangered: false,
          photo: 'https://source.unsplash.com/c8XlAc1akIU/200x100',
          donation: 10
        },
        {
          id: 3,
          name: 'Red Panda',
          number: 10000,
          endangered: true,
          photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100',
          donation: 50
        }
      ],
      count: 0
    };
  }

 removeList(id) {
    this.setState(prevState => {
      const list = prevState.details.filter(item => item.id !== id);
      return { ...prevState, details: list };
    },
    () => {
      this.updateCount();
    });
  }

  addList(details) {
    this.setState(
      prevState => {
        const newId = prevState.details.length + 1;
        const newDetails = { ...details, id: newId };
        return { ...prevState, details: [...prevState.details, newDetails] };
      },
      () => {
        this.updateCount();
      }
    );
  }

  updateCount() {
    this.setState(prevState => {
      return {
        ...prevState,
        count: this.state.details.filter(item => item.endangered === true)
          .length
      };
    });
  }

  componentDidMount() {
    this.updateCount();
  }

  render() {
    return (
      <React.Fragment>
        <CountContext.Provider value={this.state.count}>
          <Animal
            details={this.state.details}
            removeList={this.removeList.bind(this)}
          >
            <h1>Endangered Animals</h1>
          </Animal>
          <AnimalForm addList={this.addList.bind(this)} />
        </CountContext.Provider>
      </React.Fragment>
    );
  }
}

class AnimalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: 0,
      endangered: false,
      photo: '',
      donation: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInputValue(target) {
    if (target.type === 'radio' && target.value === 'yes') {
      return true;
    } else if (target.type === 'radio' && target.value === 'no') {
      return false;
    }

    return target.value;
  }

  handleChange(event) {
    const inputTarget = event.target;
    const inputValue = this.getInputValue(inputTarget);
    const inputName = inputTarget.name;

    this.setState({ [inputName]: inputValue });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addList(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add new animal details</h2>
        <label>
          <div className='title'>Name:</div>{' '}
          <input
            type='text'
            value={this.state.name}
            name='name'
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className='title'>Number:</div>{' '}
          <input
            type='number'
            value={this.state.number}
            name='number'
            onChange={this.handleChange}
          />
        </label>
        <div>
          <div className='title'>Endangered:</div>
          <label>
            <input
              type='radio'
              name='endangered'
              value='yes'
              checked={this.state.endangered}
              onChange={this.handleChange}
            />{' '}
            Yes
          </label>
          <label>
            <input
              type='radio'
              name='endangered'
              value='no'
              checked={!this.state.endangered}
              onChange={this.handleChange}
            />{' '}
            No
          </label>
        </div>
        <label>
          <div className='title'>Photo:</div>{' '}
          <input
            type='text'
            value={this.state.photo}
            name='photo'
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className='title'>Donation:</div> $
          <input
            type='number'
            value={this.state.donation}
            name='donation'
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button>Add to the list</button>
        </div>
      </form>
    );
  }
}

const withDonationColor = WrappedComponent => {
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

const AnimalDetails = props => {
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

const Animal = props => {
  const details = props.details;

  return (
    <div>
      {props.children}
      <ul className='list'>
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

      <AnimalCount />
    </div>
  );
};

class AnimalCount extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {props => (
          <div>
            Total number of endangered animals:
            <span> {props}</span>
          </div>
        )}
      </CountContext.Consumer>
    );
  }
}

const Photo = props => {
  return <img src={props.path} alt={props.name} />;
};

export default App;
