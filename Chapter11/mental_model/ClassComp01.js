import React from "react";

class Comp extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      console.log("name prop changed");
    }

    if (prevProps.age !== this.props.age) {
      localStorage.setItem("age", this.props.age);
    }
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
