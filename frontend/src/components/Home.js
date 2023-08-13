import React from "react";
import { Text, View, Button } from "react-native";
import VideoPlayer from "./components/VideoPlayer";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Upload Video"
        onPress={() => navigation.navigate("Upload")}
      />
      <VideoPlayer />
    </View>
  );
};

export default Home;
