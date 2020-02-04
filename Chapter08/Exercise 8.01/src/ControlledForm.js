import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
    };
  }

  handleOnNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleOnPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.name);
  }

  render() {
    const handleSubmit = (e) => this.handleSubmit(e);
    return (
      <form onSubmit={handleSubmit} noValidate={true}>
        <label>
          Name:
          <input type="text" value={this.state.name}
                 onChange={this.handleOnNameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password}
                 onChange={this.handleOnPasswordChange} />
        </label>
        <input type="submit" value="Login"/>
      </form>
    );
  }
}

export { ControlledForm }
