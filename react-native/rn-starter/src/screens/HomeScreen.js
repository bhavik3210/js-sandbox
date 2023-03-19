import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home asdf</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("ImageList")}
        title="Go to Image Screen Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Screen Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Screen Demo"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Screen Demo"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Screen Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
