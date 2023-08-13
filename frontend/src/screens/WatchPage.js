import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';

const videos = [ /* Add your video URLs here */ ];

const WatchPage = () => {
  const [paused, setPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const togglePaused = () => {
    setPaused(!paused);
  };

  const onIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        loop={false}
        showsPagination={false}
        index={currentIndex}
        onIndexChanged={onIndexChanged}
      >
        {videos.map((videoUrl, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={togglePaused}
            style={{ flex: 1 }}
          >
            <Video
              source={{ uri: videoUrl }}
              paused={paused}
              resizeMode="cover"
              style={{ flex: 1 }}
            />
          </TouchableOpacity>
        ))}
      </Swiper>
      <Text>{/* Display username and video title here */}</Text>
    </View>
  );
};

export default WatchPage;
