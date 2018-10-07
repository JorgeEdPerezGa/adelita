import React, { Component } from 'react';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="sub-container">
            <p>Incident</p>
          </div>
          <div className="sub-container">
            <p>Journal</p>
          </div>
          <div className="sub-container">
            <p>Resource</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
