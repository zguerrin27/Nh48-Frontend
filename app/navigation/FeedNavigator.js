import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack';

import MountainsScreen from '../screens/MountainsScreen';
import MountainDetailsScreen from '../screens/MountainDetailsScreen';

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Mountains" component={MountainsScreen} />
    <Stack.Screen 
      name="MountainDetails" 
      component={MountainDetailsScreen}
      // options={{headerShown: false}} since I have this in the Stack Navigator...I no longer need it here. Since I am now doing both stack screens
     />
  </Stack.Navigator>
)

export default FeedNavigator;