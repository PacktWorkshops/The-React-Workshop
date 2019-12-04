import React, { Component } from 'react';

import MessageDisplay from './MessageDisplay';

class UserDisplay extends Component {
  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <div className="UserDisplay">
        Logged in as {this.props.user.username}!
        <MessageDisplay userId={this.props.user.id} />
      </div>
    );
  }
}

export default UserDisplay;
