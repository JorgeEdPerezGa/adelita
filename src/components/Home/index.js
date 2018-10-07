import React, { Component } from 'react';
import Video from '../Video';
import './style.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Video/>
        <div className="home-container">
          <div
            className="logo-text"></div>
          <div className="item-container">
            <div
              className="item icon-journal"
              onClick={() =>  this.props.history.push('./journal')}></div>
            <div
              className="item icon-incident"
              onClick={() =>  this.props.history.push('./incident')}></div>
            <div
              className="item icon-resources"
              onClick={() =>  this.props.history.push('./resources')}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
