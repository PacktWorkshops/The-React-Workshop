import React, { Component } from 'react';

class ConvertInput extends Component {
  handleTemperature = event => {
    const { value } = event.target;

    this.props.updateTemperature(this.props.convertTo, value);
  };

  render({ convertTo, temperature, updateTemperature } = this.props) {
    return (
      <label>
        <span>{convertTo === 'celsius' ? 'Fahrenheit: ' : 'Celsius: '}</span>
        <input type="number" name="temperature" value={temperature} onChange={this.handleTemperature.bind(this)} />
      </label>
    );
  }
}

export default ConvertInput;
