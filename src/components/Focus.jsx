import React from 'react';
import { Button, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default class Focus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
      id: 0,
      image: "https://www.findingtheuniverse.com/wp-content/uploads/2015/10/wells252520fargo252520bank252520san252520francisco_by_Laurence252520Norah25255B725255D.jpg",
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
    this.setState(this.props.info);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.id !== 0) {
      if (this.props.info.id !== prevProps.info.id) {
        this.setState(this.props.info);
      }
    }
  }

  render () {
    let {image, title} = this.state;
    return (
      <View style={styles.container} >
        <View style={{zIndex: 1,borderWidth:1,position:'absolute',top:30,left:20,alignSelf:'flex-end'}}>
          <Button
            styles={styles.buttonDef}
            onPress={this.props.handleClose}
            type="outline"
            title="close"
          />
        </View>
        <Image
          source={{ uri: image}}
          // onPress={this.props.handleClose}
          onPress={() => console.log('close me')}
          style={{
            flex: 1,
            width: '100%',
            opacity: 1,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "white"
          }}
        />
        <Text styles={styles.title} onPress={this.props.handleClose}> {title}</Text>
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