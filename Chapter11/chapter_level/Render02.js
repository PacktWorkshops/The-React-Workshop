import React from "react";

class Counter extends React.Component {
  state = { value: this.props.initialValue };

  increment = () => {
    this.setState(prevState => this.setState({ value: prevState.value + 1 }));
  };

  decrement = () => {
    this.setState(prevState => this.setState({ value: prevState.value - 1 }));
  };

  reset = () => {
    this.setState({ value: this.props.initialValue });
  };

  render() {
    return null;
  }
}

export default Counter;
