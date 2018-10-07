import React, { Component } from 'react';
import Video from '../Video';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Video/>
        <div className="home-container">
          <div className="logo-text"></div>
          <div className="container-item icon-journal"></div>
          <div className="container-item icon-incident"></div>
          <div className="container-item icon-resources"></div>
        </div>
      </div>
    );
  }
}

export default Home;
