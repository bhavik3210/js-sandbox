import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Weather } from '../screens/weather';

const AppStack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <AppStack.Navigator initialRouteName="Weather">
      <AppStack.Screen name="Weather" component={Weather} />
    </AppStack.Navigator>
  );
}
