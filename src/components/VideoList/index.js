import React from 'react';
import VideoCard from '../VideoCard';
import './style.css';

const VideoList = ({videos, handleVideoChange}) => {

  const videoCards = videos.map(video => {
    return (
      <VideoCard
        video = {video}
        key = {video.etag}
        title = {video.snippet.title}
        videoImage = {video.snippet.thumbnails.default.url}
        handleVideoChange = {handleVideoChange}/>
    );
  });

  return (
    <ul className = 'video-list'>
      {videoCards}
    </ul>
  );
};

export default VideoList;
