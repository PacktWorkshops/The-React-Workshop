import React, { Component } from "react";

class Message extends Component {
  componentWillUnmount() {
    console.log("Removing item", this.props);
  }
  render() {
    return (
      <div className="Message">
        <p>{this.props.message}</p>
        <button onClick={() => this.props.removeItem(this.props.id)}>
          Remove me
        </button>
      </div>
    );
  }
}

export default Message;
