import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const AskPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [videoUri, setVideoUri] = useState(null);

  const toggleRecording = async () => {
    if (isRecording) {
      cameraRef.stopRecording();
    } else {
      const { uri } = await cameraRef.recordAsync({ maxDuration: 15 });
      setVideoUri(uri);
    }
    setIsRecording(!isRecording);
  };

  const onDeleteRecording = () => {
    setVideoUri(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={(ref) => {
          cameraRef = ref;
        }}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
      />
      {videoUri ? (
        <View>
          <TouchableOpacity onPress={onDeleteRecording}>
            <Text>Delete Recording</Text>
          </TouchableOpacity>
          <Text>Enter Title:</Text>
          {/* Add title input */}
          <TouchableOpacity>
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={toggleRecording}>
          <Text>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AskPage;
