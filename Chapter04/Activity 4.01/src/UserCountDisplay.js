import React, { Component } from 'react';

import { fetchUserCount } from './AjaxLibrary';

class UserCountDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { userCount: 0, loadingUserCount: false };
  }
  async componentDidMount() {
    this.setState({ loadingUserCount: true });
    const userCount = await fetchUserCount();
    this.setState({ userCount, loadingUserCount: false });
  }
  render() {
    if (this.state.loadingUserCount) {
      return <p>Loading user count...</p>;
    } else {
      return <p>Users in the app: {this.state.userCount}</p>;
    }
  }
}

export default UserCountDisplay;
