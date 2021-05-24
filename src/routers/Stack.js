import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//please short from a to z if adding new screen
import AuthFirstScreen from '../screens/AuthFirstScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingScreen from '../screens/SettingScreen';

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator headerMode="none" initialRouteName="AuthFirst">
    <Screen name="AuthFirst" component={AuthFirstScreen} />
    <Screen name="EventDetail" component={EventDetailScreen} />
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Login" component={LoginScreen} />
    <Screen name="Setting" component={SettingScreen} />
  </Navigator>
);

export default Stack;
