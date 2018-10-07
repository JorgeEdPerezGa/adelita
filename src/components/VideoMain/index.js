import React from 'react';
import './style.css';

const VideoMain = ({ video }) => {

  let videoTitle;
  let videoDescription;
  let videoId;
  let url;

  if (!video){
    return (
      <div className = 'loading'>loading...</div>
    );
  }

  if (Object.keys(video).length >= 4) {
    videoTitle = video.snippet.title;
    videoDescription = video.snippet.description;
    videoId = video.id.videoId;
    url = `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div className = 'video-detail col-md-8'>
      <div className = 'embed-responsive embed-responsive-16by9'>
        <iframe title = {url} className = 'embed-responsive-item' src = {url} />
      </div>
      <div className='video-details'>
        <p className = 'main-video-title'>{videoTitle}</p>
        <p className = 'main-video-description'>{videoDescription}</p>
      </div>
    </div>
  );
};


export default VideoMain;
