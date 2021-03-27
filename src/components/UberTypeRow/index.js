import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import * as Icons from '../../components/icons';

export default function UberTypeRow(props) {
  const {type} = props;
  console.log(props);

  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    }
    if (type.type === 'UberXL') {
      return require('../../assets/images/UberXL.jpeg');
    }
  };

  return (
    <View style={styles.container}>
      {/**
       * Image
       */}
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Icons.Ionicons name="person" size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icons.Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
}
