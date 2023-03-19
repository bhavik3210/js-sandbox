import React from "react";
import { View } from "react-native";
import ImageDetail from "../screens/components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imgSrc={require("../../assets/forest.jpg")}
        score={10}
      />
      <ImageDetail
        title="Beach"
        imgSrc={require("../../assets/beach.jpg")}
        score={9}
      />
      <ImageDetail
        title="Mountain"
        imgSrc={require("../../assets/mountain.jpg")}
        score={8}
      />
    </View>
  );
};

export default ImageScreen;
