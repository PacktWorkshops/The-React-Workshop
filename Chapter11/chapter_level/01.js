import React from "react";

class Counter extends React.Component {
  state = { value: 0 };

  render() {
    return (
      <>
        <div>The current value is: {this.state.value}</div>
        <div>
          <button
            onClick={() =>
              this.setState(prevValue => ({ value: prevValue.value + 1 }))
            }
          >
            click here to increment it
          </button>
          <button
            onClick={() =>
              this.setState(prevValue => ({ value: prevValue.value - 1 }))
            }
          >
            click here to decrement it
          </button>
          <button onClick={() => this.setState({ value: 0 })}>
            click here to reset the counter
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
