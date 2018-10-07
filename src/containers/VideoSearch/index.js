import React, { Component } from 'react';
import './style.css';

class VideoSearch extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleChange = (search) => {
    this.setState({search});
    this.props.videoSearch(search);
  }

  render() {
    return (
      <input
        className = 'video-input'
        placeholder = 'search'
        value = {this.state.search}
        onChange = {event => this.handleChange(event.target.value)}/>
    );
  }
}

export default VideoSearch;
