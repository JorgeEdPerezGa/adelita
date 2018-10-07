import React from 'react';
import video from '../../assets/video/beach.mp4';
import './style.css';

const Video = () => {
  return (
    <div>
      <video
        poster={video}
        className="welcome-video"
        playsInline
        autoPlay
        muted
        loop>
        <source
          src={video}
          type="video/mp4">
        </source>
      </video>
    </div>
  );
};

export default Video;
