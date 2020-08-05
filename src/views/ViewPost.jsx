import React from 'react';
import { Button, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default class ViewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
      id: 0,
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

  render () {
    let handleChange = (e) => {
      console.log(e);
      this.setState({
        [e.target.id]: e.target.value,
      });
    }

    return (
      <View style={styles.container} >
        <View style={styles.post} >
          <h2>Upload Image</h2>
          <label>Title: </label>
          <input type="text" id="title" onChange={this.handleChange}></input>
          <label>Description: </label>
          <input type="text" id="descr" onChange={this.handleChange}></input>
          <label>Latitude: </label>
          <input type="text" id="latitude" onChange={this.handleChange}></input>
          <label>Longitude: </label>
          <input type="text" id="Longitude" onChange={this.handleChange}></input>
          <select onChange={this.handleChange} id="shirt" >
            <option value="scene">Scenic</option>
            <option value="nom">Food and Bev</option>
          </select>

        <Button onClick={() => {console.log('beep boop register')}}>REGISTER</button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  post:{
    flex: 1,
    width: "60%",
    top: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    flex: 1
  },
  buttonDef: {
    position: 'relative',
    height: 20,
    width: 20,
    color: "white",
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
});