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
    return this.props.children({
      value: this.state.value,
      increment: this.increment,
      decrement: this.decrement,
      reset: this.reset
    });
  }
}

export default Counter;
