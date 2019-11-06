import React from "react";

class Comp extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      console.log("name prop changed");
    }

    if (prevProps.age !== this.props.age) {
      localStorage.saveItem("age", this.props.age);
    }
  }

  componentWillUnmount() {
    localStorage.removeItem("age");
  }

  render() {
    return (
      <div>
        {this.props.name} is {this.props.age} old
      </div>
    );
  }
}

export default Comp;
