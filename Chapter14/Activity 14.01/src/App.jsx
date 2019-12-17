import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoUrl: '',
      downloads: 0,
      views: 0,
      likes: 0
    }
  }

  onGetPhoto() {
    axios.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 6463359ac22d145576915c2fd1d28838f53e80174b2e95fc0b86026b6c7d6955'
      }
    }).then(res => {
      this.setState({
        photoUrl: res.data.urls.full
      });

      const photoId = res.data.id;

      axios.get(`https://api.unsplash.com/photos/${photoId}/statistics`, {
        headers: {
          Authorization: 'Client-ID 6463359ac22d145576915c2fd1d28838f53e80174b2e95fc0b86026b6c7d6955'
        }
      }).then(res => {
        this.setState({
          downloads: res.data.downloads.total,
          views: res.data.views.total,
          likes: res.data.likes.total
        });
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    const style = {
      backgroundImage: `url(${this.state.photoUrl})`
    };

    return(
      <div className="page" style={style}>
        <div className="box">
          <h1>Get a Random Photo</h1>

          <button onClick={this.onGetPhoto.bind(this)}>Random Photo</button>

          <h2>Statistics</h2>
          <ul className="stat-list">
            <li className="stat-item">
              <h3>Downloads</h3>
              <p>{this.state.downloads.toLocaleString()}</p>
            </li>
            <li className="stat-item">
              <h3>Views</h3>
              <p>{this.state.views.toLocaleString()}</p>
            </li>
            <li className="stat-item">
              <h3>Likes</h3>
              <p>{this.state.likes.toLocaleString()}</p>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default App;
