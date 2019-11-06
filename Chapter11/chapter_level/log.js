import React from "react";

class Log extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.watch !== this.props.watch) {
      console.log("value changed");
    }
  }

  render() {
    return this.props.children();
  }
}

export default Log;
