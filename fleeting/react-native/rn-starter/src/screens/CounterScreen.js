import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "type_increment":
      return { ...state, count: action.payload + 1 };
    case "type_decrement":
      return { ...state, count: action.payload - 1 };
    default:
      return state;
  }
};

const countScreen = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  return (
    <View>
      <Button
        title="Increment by 1: "
        onPress={() => {
          dispatch({ type: "type_increment", payload: count });
        }}
      />
      <Button
        title="Decrement by 1: "
        onPress={() => {
          dispatch({ type: "type_decrement", payload: count });
        }}
      />
      <Text> Current Count: {count} </Text>
    </View>
  );
};

export default countScreen;
