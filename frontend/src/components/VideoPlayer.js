import React from "react";
import { Video } from "react-native-video";

const VideoPlayer = ({ data }) => {
  const source = {
    uri: data.url,
  };

  return (
    <Video source={source} />
  );
};

export default VideoPlayer;
