import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Application from 'expo-application';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';


export default class TestMarker extends React.Component {
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
    this.setState(this.props.spark);
  }

  render () {
    let {title, image, views, geo} = this.state;
    let rad = 120;
    rad = rad/2 + rad/2 * (views/100);

    let handleClick = () => {
      let highlight = this.state;
      // console.log(`highlight is ${highlight}`)
      this.props.handleClick(highlight);
    };

    return (
      <Marker
      coordinate={{ latitude: geo.latitude, longitude: geo.longitude }}
      title={title}
      anchor={{x: 0.5, y: 0.5}}
      >
        <Image
          source={{ uri: image}}
          style={{
            width: rad,
            height: rad,
            borderRadius: rad/2,
            opacity: 0.7,
            borderWidth: 3,
            borderColor: "white"
          }}
        />
        <Callout
          onPress={handleClick}
          // onPress={() => console.log('press')}
        >
        <Text>{title}</Text>
        <Text>{views} views</Text>
        </Callout>
      </Marker>
    )
  }
}