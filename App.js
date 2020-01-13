import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Dashboard from './Component/LandingPage';
import DataPage from './Component/DataPage';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  DataPage: {
    screen: DataPage,
  },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({});
