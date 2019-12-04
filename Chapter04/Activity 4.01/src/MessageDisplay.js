import React, { Component } from 'react';

import { fetchMessages } from './AjaxLibrary';

class MessageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { loadingMessages: false, messages: [] };
  }
  async componentDidMount() {
    this.setState({ loadingMessages: true });
    const messages = await fetchMessages(this.props.userId);
    this.setState({ messages, loadingMessages: false });
  }
  componentWillUnmount() {
    console.log('Unmounting messages');
  }
  render() {
    if (this.state.loadingMessages) {
      return <p>Messages still loading...</p>;
    } else {
      if (this.state.messages.length > 0) {
        return (
          <ul>
            {this.state.messages.map((msg, index) => (
              <li key={`m-${index}`}>{msg}</li>
            ))}
          </ul>
        );
      } else {
        return <p>No messages for you!</p>;
      }
    }
  }
}

export default MessageDisplay;
