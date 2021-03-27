import React from 'react';
import {View, Text} from 'react-native';
import * as Icons from '../../components/icons';
import styles from './styles';

export default function HomeMap() {
  return (
    <View>
      {/**
       * Input Box
       */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.timeContainer}>
          <Icons.AntDesign name="clockcircle" size={16} color="#535353" />
          <Text>Now</Text>
          <Icons.MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </View>

      {/**
       * Previous Destination
       */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icons.AntDesign name="clockcircle" size={20} color="#ffffff" />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

      {/**
       * Home Destination
       */}
      <View style={styles.row}>
        <View style={{...styles.iconContainer, backgroundColor: '#218cff'}}>
          <Icons.Entypo name="home" size={20} color="#ffffff" />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
}
