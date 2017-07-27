import React from 'react';

const VideoDetail = ({video}) => {
  // avoid error if component loads before network request finishes
  if (!video) {
    return <div>Loading...</div>;
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
