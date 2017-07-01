//index.android.js - code for android

//Importing libraries to help creating components
import React from 'react';
//import ReactNative from 'react-native';
import { View, AppRegistry } from 'react-native';
//importing header
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
/*
const App = () => {
  return (
    <Text>Some text</Text>
  );
};
*/
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
