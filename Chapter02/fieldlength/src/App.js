import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { field: "", submitDisabled: true };
  }
  renderFieldLength() {
    return <p>{`${this.state.field.length} character(s)!`}</p>
  }
  updateFieldLength(event) {
    const field = event.target.value;
    this.setState({ field }, () => {
      this.validateFieldLength();
    });
  }
  validateFieldLength() {
    if (this.state.submitDisabled && this.state.field.length > 100) {
      this.setState({ submitDisabled: false });
    } else if (!this.state.submitDisabled && this.state.field.length <= 100) {
      this.setState({ submitDisabled: true });
    }
  }
  submitForm() {
    alert("Submitting the blog post!");
  }
  render() {
    return (
      <div className="App">
        <h2>Blog Post Writer</h2>
        <hr />
        <strong>Write your post here</strong><br />
        <small>Must be at least 100 characters!</small><br />
        <textarea cols="80" rows="25" onChange={this.updateFieldLength.bind(this)}></textarea>
        <br />
        {this.renderFieldLength()}
        <br />
        <button disabled={this.state.submitDisabled} onClick={this.submitForm}>Submit Post</button>
      </div>
    );
  }
}

export default App;
