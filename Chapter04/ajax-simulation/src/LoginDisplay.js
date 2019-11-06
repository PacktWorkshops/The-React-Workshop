import React, { Component } from 'react';

import { fetchUser } from './AjaxLibrary';

import UserDisplay from './UserDisplay';

class LoginDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { loginUsername: null, loadingLogin: false, user: null };
    this.updateLoginForm = this.updateLoginForm.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }
  updateLoginForm(evt) {
    const loginUsername = evt.target.value;
    this.setState({ loginUsername });
  }
  async doLogin() {
    this.setState({ loadingLogin: true });
    const user = await fetchUser(this.state.loginUsername);
    this.setState({ user, loadingLogin: false });
  }
  doLogout() {
    this.setState({ user: null });
  }
  loginForm() {
    if (this.state.loadingLogin) {
      return 'Trying to login, please wait...';
    } else {
      if (!this.state.user) {
        return (
          <div className="Login">
            Login Username:
            <input type="text" onChange={this.updateLoginForm} />
            <button onClick={this.doLogin}>Login</button>
          </div>
        );
      } else {
        return <button onClick={this.doLogout}>Logout</button>;
      }
    }
  }
  render() {
    return (
      <div className="LoginDisplay">
        {this.loginForm()}
        <hr />
        <UserDisplay user={this.state.user} />
      </div>
    );
  }
}

export default LoginDisplay;
