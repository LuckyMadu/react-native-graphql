import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screens
import {Home, Chat} from '../screens';

const AppStack = createNativeStackNavigator();

const AppStackNavigator = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#E9FFF4'},
      headerStyle: {
        backgroundColor: '#ffffff',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    }}>
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Chat" component={Chat} />
  </AppStack.Navigator>
);

export default AppStackNavigator;
