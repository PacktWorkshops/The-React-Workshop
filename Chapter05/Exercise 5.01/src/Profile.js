import React, { Component } from "react";
// styles
import "./profile.css";

class Profile extends Component {
  render() {
    const { name, image, age, interests, color, movie } = this.props.user;
    return (
      <section className="profile">
        <header>
          <h1>{name}</h1>
        </header>
        <div className="profile-content">
          <div className="profile-image">
            <img src={image} alt={name} />
          </div>
          <div>
            <p>
              <strong>Age:</strong> {age}
            </p>
            <p>
              <strong>Interests:</strong> {interests}
            </p>
            <p>
              <strong>Favourite Color:</strong> {color}
            </p>
            <p>
              <strong>Favourite Movie:</strong> {movie}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Profile;
