import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

function AppNavigation() {
  return <AppStack.Navigator></AppStack.Navigator>;
}
