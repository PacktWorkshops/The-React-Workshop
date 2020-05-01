import { Component } from "react";

class Logger extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.watch !== this.props.watch) {
      console.log("Value changed:", this.props.watch);
    }
  }
  render() {
    return this.props.children;
  }
}

export default Logger;
