import React from 'react';
import VideoListItem from './video_list_item'
const VideoList = (props) => {
  const videoItems = props.videos.map((video, i) => {
    return (
      <VideoListItem onSelectedVideo={props.onSelectedVideo} key = {i} video = { video } />
      )
  })
  return (
    <ul>
      {videoItems}
    </ul>
  )
}
export default VideoList;
