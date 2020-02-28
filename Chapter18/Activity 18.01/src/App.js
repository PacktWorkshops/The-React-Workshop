import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
const Modal = props => {
  return <div className="Modal">{props.children}</div>;
};
export class ModalOverlay extends React.Component {
  render() {
    const { showModal, onCloseHandler } = this.props;
    const fallbackSelector = document.querySelector("body");
    const mountingPoint = this.props.mountingPoint || fallbackSelector;
    if (showModal) {
      mountingPoint.style.overflowY = "hidden";
      const ModalPortal = (
        <div className="ModalOverlay">
          <Modal>
            {React.Children.map(this.props.children, child =>
              React.cloneElement(child, {
                onClick: onCloseHandler
              })
            )}
          </Modal>
        </div>
      );
      return ReactDOM.createPortal(ModalPortal, mountingPoint);
    }
    mountingPoint.style.overflowY = "scroll";
    return null;
  }
}
class App extends React.Component {
  viewportRef = React.createRef();
  state = {
    showModal: false
  };
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>Show modal!</button>
        <div ref={this.viewportRef} className="Viewport">
          Lorem Ipsum
        </div>

        <ModalOverlay
          onCloseHandler={this.toggleModal}
          mountingPoint={this.viewportRef.current}
          showModal={this.state.showModal}
        >
          <div>
            <h3>This is the modal content! :)</h3>
            <button>Close!</button>
          </div>
        </ModalOverlay>
      </div>
    );
  }
}
export default App;
