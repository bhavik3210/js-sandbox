import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  // console.log(data.author);
  console.log(data);
  console.log(addBlogPost);

  // let author = data.author;
  let posts = data;

  return (
    <View>
      <Button onPress={addBlogPost} title="ADD BLOG" />
      {/* <Text>Author: {author.name}</Text> */}
      <FlatList
        data={posts}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
