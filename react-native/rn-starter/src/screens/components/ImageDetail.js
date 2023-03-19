import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imgSrc, score }) => {
  return (
    <View>
      <Image source={imgSrc} />
      <Text> {title} </Text>
      <Text> Image Score: {imageScore} </Text>
    </View>
  );
};

export default ImageDetail;
