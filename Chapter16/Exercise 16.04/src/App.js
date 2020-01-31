import React, { Component } from 'react';
import FontList from './FontList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: 'popularity'
    };
  }

  handleClick = sort => {
    this.setState({ sort });
  };

  render() {
    return (
      <div className='container'>
        <div>
          <button
            className='card__button'
            onClick={() => {
              this.handleClick('popularity');
            }}
          >
            Popularity
          </button>
          <button
            className='card__button'
            onClick={() => {
              this.handleClick('trending');
            }}
          >
            Trending
          </button>
        </div>
        <FontList sort={this.state.sort} />
      </div>
    );
  }
}

export default App;
