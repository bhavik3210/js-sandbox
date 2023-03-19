import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const myName = "John Doe";
  const title = (
    <Text style={styles.titleStyle}>Getting Started with React Native!</Text>
  );
  const content = <Text style={styles.contentStyle}>My name is {myName}</Text>;

  return (
    <View style={styles.pageSpacing}>
      {title}
      <Text />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  pageSpacing: {
    padding: 20,
  },
  titleStyle: {
    fontSize: 45,
  },
  contentStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
