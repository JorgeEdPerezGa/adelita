import React from 'react';
import "./style.css";

const VideoCard = ({video, title, videoImage, handleVideoChange}) => {

  return (
    <li
      className = 'video-card-list-item'
      onClick = {() => handleVideoChange(video)}>
      <div className = 'video-card media'>
        <div className = "card-left">
          <img
            alt = 'video-thumbnail'
            className = 'card-image'
            src = {videoImage}/>
        </div>
        <div className = 'video-description'>
          <p>{title}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
