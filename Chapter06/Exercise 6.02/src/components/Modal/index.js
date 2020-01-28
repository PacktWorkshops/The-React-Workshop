import React, { Component } from "react";
// styles
import "./styles.css";

class Modal extends Component {
  render() {
    if (!this.props.showModal) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal_content">
          {this.props.children}
          <div>
            <button onClick={this.props.toggleModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export { Modal };
