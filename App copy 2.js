import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//additions
// import MapView from 'react-native-maps';
import * as Application from 'expo-application';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import data from './sampleData.js';

import TestMarker from './src/components/TestMarker.jsx';
import Focus from './src/components/Focus.jsx';

export default class App extends React.Component {
  state = {
    maps: [],
    focus: false,
    focusObj: {}
  }

  componentDidMount(){
    this.setState({maps: data});
    // console.log(data);
  }

  render() {
    let closeFocus = e => {
      this.setState({focus: false});
    }

    //toggle focus window
    let toggleFocus = highlight => {
      // let toggle = !this.state.focus
      // console.log(this.state.focus);
      this.setState({focus: true, focusObj: highlight})
    }

    let focusRender = () => {
      return (
        null
      )
    }

    let focusWindow = null;
    if (this.state.focus == true) {
      focusWindow = <Focus info={this.state.focusObj} handleClose={closeFocus}/>
    } else {
      focusWindow = null;
    };

    let renderMarkers;
    if (this.state.maps.length > 0) {
      renderMarkers = this.state.maps.map((item) => <TestMarker spark={item} key={item.id} handleClick={toggleFocus}/>)
    } else {
      renderMarkers = <TestMarker />;
    };


    return (
      <View style={styles.container}>
        {focusWindow}
        <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.78800,
          longitude: -122.4325,
          latitudeDelta: 0.10,
          longitudeDelta: 0.04
        }}
        style={styles.mapStyle}
        >
        {renderMarkers}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    // width: Dimensions.get('window').width,
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
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: '100%',
    // height: '100%'
  },

  // mapStyle: {
  //   width: Dimensions.get('window').width,
  //   height: Dimensions.get('window').height,
  // },
});
