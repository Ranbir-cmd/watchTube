import React from "react";

const VideoDetail = ({ clickedVideo }) => {
  if (!clickedVideo) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${clickedVideo.id.videoId}`;
  return (
    <div className="ui segment">
      <iframe
        width="650"
        height="315"
        src={videoSrc}
        title="video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h4>{clickedVideo.snippet.title}</h4>
      <p>{clickedVideo.snippet.description}</p>
    </div>
  );
};
export default VideoDetail;
