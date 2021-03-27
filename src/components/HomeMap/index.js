import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import cars from '../../assets/data/cars';

export default function HomeMap() {
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    if (type === 'UberXL') {
      return require('../../assets/images/top-UberXL.png');
    }
  };

  return (
    // <View
    //   style={{
    //     height: '35%',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'pink',
    // </View>
    //   }}>
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {cars.map(car => {
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
          // image={require('../../assets/images/top-UberX.png')}
        >
          <Image
            style={{height: 70, width: 70, resizeMode: 'contain'}}
            source={getImage(car.type)}
          />
        </Marker>;
      })}
    </MapView>
  );
}
