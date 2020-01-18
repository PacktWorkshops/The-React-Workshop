import React, { Component } from "react";

import "./profile.css";

class Profile extends Component {
  render() {
    const { name, image, age, interests, color, movie } = this.props.user;
    return (
      <section class="profile">
        <header>
          <h1>{name}</h1>
        </header>
        <div class="profile-content">
          <div class="profile-image">
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
