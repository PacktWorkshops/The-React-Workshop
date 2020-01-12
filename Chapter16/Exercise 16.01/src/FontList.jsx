import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = '12345';

class FontList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fonts: []
    };
  }

  async componentDidMount() {
    // 1. Fetch data with axios
    const res = await axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=popularity`
    );

    // 2. Update state
    this.setState({
      fonts: res.data.items.slice(0, 10)
    });
  }

  render() {
    return (
      <div className='card'>
        {this.state.fonts.map((font, index) => (
          <a
            href={`https://fonts.google.com/specimen/${font.family.replace(
              ' ',
              '+'
            )}`}
            className='card__item'
            key={index}
          >
            {font.family}
          </a>
        ))}
      </div>
    );
  }
}

export default FontList;
