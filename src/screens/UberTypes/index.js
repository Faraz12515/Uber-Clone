import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import UberTypeRow from '../../components/UberTypeRow';
import typesData from '../../assets/data/types';

export default function UberTypes(props) {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map((type, i) => (
        <UberTypeRow key={i} type={type} />
      ))}

      <View style={styles.confirmButtonView}>
        <Pressable onPress={confirm} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Uber</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  confirmButtonView: {
    marginTop: 5,
  },
  confirmButton: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',

    backgroundColor: 'black',
    padding: 10,
    margin: 10,
  },
  confirmButtonText: {
    fontSize: 18,
    color: 'white',
  },
});
