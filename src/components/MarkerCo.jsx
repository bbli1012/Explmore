import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Application from 'expo-application';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
      image: "imageUrl",
      views: 0,
      type: "scene",
      geo: {
        latitude: 0,
        longitude: 0,
        heading: 0
      },
      target: {
        latitude: 0,
        longitude: 0,
        heading: 0
      }
    }
  }

  componentDidMount() {
    this.setState({
      title: "City Skies",
      image: "https://www.findingtheuniverse.com/wp-content/uploads/2015/10/wells252520fargo252520bank252520san252520francisco_by_Laurence252520Norah25255B725255D.jpg",
      views: 100,
      type: "scene",
      geo: {
        latitude: 37.794116,
        longitude: -122.400141,
        heading: 0
      },
      target: {
        latitude: 0,
        longitude: 0,
        heading: 0
      }
    })
  }

  render() {
    let {title, image, views, type, geo, target} = this.state;
    let rad = 120;
    return (
    <Marker
    coordinate={{ latitude: , longitude: -122.450599 }}
    title={title}>
      <Image
        source={{ uri: image}}
        style={{width: rad, height: rad, borderRadius: rad/ 2}}
      />
      <Callout>
        <Text>{title}</Text>
        <Text>{views} views</Text>
      </Callout>
      {/* <Image source={require('./assets/logo.png')} /> */}
    </Marker>
    )
  }
}

