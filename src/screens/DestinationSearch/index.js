import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function DestinationSearch() {
  const [currentLocationText, setCurrentLocationText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <TextInput
          value={currentLocationText}
          onChangeText={setCurrentLocationText}
          style={styles.textInput}
          placeholder="Current Location"
        /> */}
        {/* <TextInput
          value={destinationText}
          onChangeText={setDestinationText}
          style={styles.textInput}
          placeholder="Where to?"
        /> */}
        <GooglePlacesAutocomplete
          //   ref={ref}
          placeholder="Current Location"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCDVWg1dGfjLKJ-rxmgFfkDy_7hxEhozrU',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          //   ref={ref}
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCDVWg1dGfjLKJ-rxmgFfkDy_7hxEhozrU',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
}
