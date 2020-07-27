import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//additions
// import MapView from 'react-native-maps';
import * as Application from 'expo-application';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import data from './sampleData.js';

import TestMarker from './components/TestMarker.jsx';
import Focus from './components/Focus.jsx';

export default class App extends React.Component {
  state = {
    maps: [],
    focus: false,
    mutli: 1,
    focusObj: {}
  }

  componentDidMount(){
    this.setState({maps: data});
    // console.log(data);
  }

  render() {
    let modal = 1;
    let closeFocus = e => {
      console.log('close')
      this.setState({focus: false});
    }

    let toggleFocus = highlight => {
      // let toggle = !this.state.focus
      // console.log(highlight);
      // this.setState({focus: true, focusObj: highlight});
      // console.log(toggle);
      console.log(this.state.focus);
      this.setState({focus: true, focusObj: highlight})
    }

    let focusRender = () => {
      return (
        null
      )
    }

    let focusWindow = null;
    if (this.state.focus == true) {
      console.log('in focus');
      modal = 0.5;
      focusWindow = <Focus info={this.state.focusObj} handleClose={closeFocus}/>
    } else {
      modal = 1;
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
        {/* <Image source={require('./assets/logo.png')} /> */}
        {focusWindow}
        {/* <View style={{flex: 1}}> */}
        <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.78800,
          longitude: -122.4325,
          latitudeDelta: 0.10,
          longitudeDelta: 0.04
        }}
        style={styles.mapStyle}
        // style={{
        //   width: Dimensions.get('window').width,
        //   height: Dimensions.get('window').height * modal
        // }}
        >
        {/* <Marker
        coordinate={{ latitude: 37.792184, longitude: -122.450599 }}
        title={'Test Marker'}>
          <Callout>
            <Image source={require('./assets/logo.png')} />
            <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} />
            <Text>Test callout</Text>
          </Callout>
          <Image source={require('./assets/logo.png')} />
        </Marker> */}
        {renderMarkers}
        </MapView>
        {/* </View> */}
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
