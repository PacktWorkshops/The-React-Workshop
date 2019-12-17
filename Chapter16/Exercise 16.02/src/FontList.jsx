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

  async getFonts() {
    // 1. Fetch data with axios
    const res = await axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=${this.props.sort}`
    );

    // 2. Update state
    this.setState({
      fonts: res.data.items.slice(0, 10)
    });
  }

  componentDidMount() {
    this.getFonts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sort !== this.props.sort) {
      this.getFonts();
    }
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
