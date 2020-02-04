import React from 'react';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);

    this.name = null;
    this.password = null;

    this.setNameRef = element => {
      this.name = element;
    };

    this.setPasswordRef = element => {
      this.password = element;
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.info('A name was submitted: ' + this.name.value);
    console.info('A password was submitted: ' + this.password.value);
  }

  render() {
    const handleSubmit = (e) => this.handleSubmit(e);
    return (
      <form onSubmit={handleSubmit} noValidate={true}>
        <label>
          Email:
          <input type="text" ref={this.setNameRef}/>
        </label>
        <label>
          Password:
          <input type="password" ref={this.setPasswordRef}/>
        </label>
        <input type="submit" value="Login"/>
      </form>
    );
  }
}

export { UncontrolledForm }
