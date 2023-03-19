import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const title = <Text style={styles.titleStyle}>List Screen</Text>;
  const friends = [
    { key: 1, name: "Friend 1", age: "30" },
    { key: 2, name: "Friend 2", age: "40" },
    { key: 3, name: "Friend 3", age: "50" },
    { key: 4, name: "Friend 4", age: "60" },
    { key: 5, name: "Friend 5", age: "70" },
    { key: 6, name: "Friend 6", age: "80" },
    { key: 7, name: "Friend 7", age: "90" },
    { key: 8, name: "Friend 8", age: "100" },
    { key: 9, name: "Friend 9", age: "101" },
    { key: 10, name: "Friend 10", age: "102" },
  ];

  return (
    <View style={styles.pageSpacing}>
      {title}
      <Text />
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.listItemStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
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
  listItemStyle: {
    marginVertical: 30,
  },
});

export default ListScreen;
