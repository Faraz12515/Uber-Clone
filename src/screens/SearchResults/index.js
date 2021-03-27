import React from 'react';
import {View, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../UberTypes';

export default function SearchResults() {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
}
