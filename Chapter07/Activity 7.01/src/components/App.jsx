import React, { Component } from 'react';
import ConvertForm from './ConvertForm';
import { StatusProvider } from './StatusContext';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const defaultCelsius = 20;

    this.state = {
      celsius: defaultCelsius,
      fahrenheit: this.getFahrenheit(defaultCelsius)
    };
  }

  getFahrenheit(c) {
    return parseInt((c * 9) / 5 + 32);
  }

  getCelsius(f) {
    return parseInt(((f - 32) * 5) / 9);
  }

  convertTemperature(convertTo, value) {
    return convertTo === 'celsius'
      ? { celsius: this.getCelsius(value), fahrenheit: parseInt(value) }
      : { celsius: parseInt(value), fahrenheit: this.getFahrenheit(value) };
  }

  updateTemperature(convertTo, value = 0) {
    this.setState(() => {
      if (value === '' || value === '-') {
        const returnValue = value === '-' ? '-' : '';

        return {
          celsius: returnValue,
          fahrenheit: returnValue
        };
      }

      return this.convertTemperature(convertTo, value);
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Temperature Converter</h1>
        <StatusProvider value={this.state.celsius}>
          <ConvertForm
            temperature={this.state}
            updateTemperature={this.updateTemperature.bind(this)}
          />
        </StatusProvider>
      </div>
    );
  }
}

export default App;
