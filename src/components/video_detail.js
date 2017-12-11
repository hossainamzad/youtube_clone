import React from 'react';
const VideoDetail = ({video}) => {
  // these if statement is checking if the component has received any
  //video from the app component. Without this, the video id is undefined
  // and we get an error.
  if (!video) {
    return <div>Loading </div>;
  }
  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  return(
    <div>
      <iframe src={url}></iframe>
      <div>{video.snippet.title}</div>
    </div>
    )
}
export default VideoDetail;
