/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
/*class SearchPage extends Component<Props> {


  static navigationOptions = {
    title: 'Sabzi Finder',
  };

  render() {
    return React.createElement(Text, {style: styles.description}, "Searching for veggiestables to buy (again)!");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/

const NavigationStack = createStackNavigator({
  Home: {
    screen: SearchPage
  },
  Results: { 
    screen: SearchResults 
},
});

const App = createAppContainer(NavigationStack);
export default App;
