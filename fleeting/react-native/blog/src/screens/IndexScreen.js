import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  console.log(state);
  console.log(addBlogPost);

  return (
    <View>
      <Button onPress={addBlogPost} title="ADD BLOG" />
      {/* <Text>Author: {author.name}</Text> */}
      <FlatList
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
