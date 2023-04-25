import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export function Weather() {
  return (
    <View style={styles.textasdf}>
      <Text>Weather Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textasdf: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 32,
    color: '#000000',
    flex: 1,
  },
});
