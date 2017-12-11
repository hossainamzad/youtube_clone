import React from 'react';
const VideoListItem = ({video, onSelectedVideo}) => {
  console.log(video)
  const imageUrl = video.snippet.thumbnails.default.url
  console.log(imageUrl)
  const title = video.snippet.channelTitle
  console.log(title)

  const handleOnClick = () => {
    onSelectedVideo(video);
  }
  return (
    <li onClick = {handleOnClick}>
      <div>
        TITLE: {title}
      </div>
      <div>
        <img src={imageUrl} />
      </div>
    </li>
  )
}
export default VideoListItem;
