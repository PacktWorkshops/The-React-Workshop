import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onSearchSubmit = event => {
    event.preventDefault();

    axios
      .get('https://images-api.nasa.gov/search', {
        params: { q: this.state.term }
      })
      .then(res => {
        console.log(res);
      });
  };

  render() {
    console.log(this.state.term);

    return (
      <div className='o-container'>
        <h1>Search NASA images</h1>

        <form className='c-search' onSubmit={this.onSearchSubmit.bind(this)}>
          <input
            type='search'
            name='image-search'
            className='c-search__input'
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />

          <button>Search images</button>
        </form>
      </div>
    );
  }
}

export default App;
