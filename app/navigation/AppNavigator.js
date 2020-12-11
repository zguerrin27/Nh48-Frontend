import React from 'react';
import { createBottomTabNavigator } from  '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HikeEditScreen from '../screens/HikeEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewHikeButton from './NewHikeButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Feed" 
      component={FeedNavigator}
      options={{
        tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size} />
      }} />
    <Tab.Screen 
      name="HikeEdit" 
      component={HikeEditScreen}
      options={({ navigation }) => ({  // when you use a funtion here, react-navigation injects "navigation" and "route" props for us 
        tabBarButton: () => <NewHikeButton onPress={() => navigation.navigate(routes.HIKE_EDIT) } />,
        tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
      })} />
    <Tab.Screen 
      name="Account" 
      component={AccountNavigator}
      options={{
        tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" color={color} size={size} />
      }} />
  </Tab.Navigator>
)

export default AppNavigator;