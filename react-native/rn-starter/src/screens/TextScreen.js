import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const errorMessage = <Text>Password must be longer than 5 characters</Text>;

  const newLocal = (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="type here"
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>my name is {name}</Text>
    </View>
  );

  return (
    <View>
      {newLocal}
      <Text></Text>
      <Text></Text>

      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="type password here"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />

      {password.length < 5 ? errorMessage : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
