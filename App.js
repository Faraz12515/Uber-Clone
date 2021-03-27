import React from 'react';
import {StatusBar, View} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
      {/* <DestinationSearch /> */}
      {/* <SearchResults /> */}
    </>
  );
}
