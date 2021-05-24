//package import
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//local import here
import HomeLogic from './Home.logic';
import NavigationDrawer from './components/NavigationDrawer';
import EventsScreen from '../EventsScreen';

const HomeScreen = () => {
  //logic value here
  HomeLogic();
  const { Navigator, Screen } = createDrawerNavigator();

  //place your extension component here

  return (
    <Navigator
      initialRouteName="Events"
      backBehavior="initialRoute"
      drawerContent={(props) => <NavigationDrawer {...props} />}
    >
      <Screen name="Events" component={EventsScreen} />
    </Navigator>
  );
};

export default HomeScreen;
