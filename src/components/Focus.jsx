import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Focus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
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

  // componentDidMount() {
  //   this.setState(this.props.info);
  // }

  componentDidUpdate(prevProps, prevState){
    if (this.props.info.id !== prevProps.info.id) {
      this.setState(this.props.info);
    }
  }

  render () {
    let {image, title} = this.state;
    return (
      <View style={styles.container} >

        <Image
          source={{ uri: image}}
          // onPress={this.props.handleClose}
          onPress={() => console.log('close me')}
          style={{
            flex: 1,
            width: '100%',
            // width: 300,
            // height: 200,
            borderRadius: 5,
            opacity: 1,
            // borderWidth: 3,
            // borderColor: "white"
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
});