import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//additions
// import MapView from 'react-native-maps';
import * as Application from 'expo-application';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';



export default function App() {


  return (
    <View style={styles.container}>
      {/* <Image source={require('./assets/logo.png')} /> */}
      <MapView
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 37.78800,
        longitude: -122.4325,
        latitudeDelta: 0.10,
        longitudeDelta: 0.04
      }}
      style={styles.mapStyle} >
      <Marker
      coordinate={{ latitude: 37.792184, longitude: -122.450599 }}
      title={'Test Marker'}>
        <Callout>
          <Image source={require('./assets/logo.png')} />
          {/* <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} /> */}
          <Text>Test callout</Text>
        </Callout>
        {/* <Image source={require('./assets/logo.png')} /> */}
      </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  // mapStyle: {
  //   width: Dimensions.get('window').width,
  //   height: Dimensions.get('window').height,
  // },
});
