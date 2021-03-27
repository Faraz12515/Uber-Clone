import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function CovidMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tavel only if necessary</Text>
      <Text style={styles.text}>
        Help flatten the curve. If you mst travel please exercise caution for
        your safety and the safety of our community.
      </Text>

      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
}
