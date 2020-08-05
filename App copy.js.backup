import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//additions
// import MapView from 'react-native-maps';
import * as Application from 'expo-application';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';

export default function App() {
    // addtion https://docs.expo.io/tutorial/image-picker/
    const [selectedImage, setSelectedImage] = React.useState(null);
    // end

  //additions https://docs.expo.io/tutorial/image-picker/
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }

    setSelectedImage({ localUri: pickerResult.uri });
  }

  //addition  https://docs.expo.io/tutorial/sharing/
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };
  //end

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
                <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
  // end

  return (
    <View style={styles.container}>
      {/* <Image source={logo} style={{ width: 305, height: 159 }} style={styles.logo}/> */}
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo}/>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{Application.applicationId}</Text>
      <Text style={styles.instructions} >
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={ styles.button }>
        <Text style={ styles.buttonText }>Pick a photo</Text>
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
      {/* <MapView style={styles.mapStyle} /> */}
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
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  // mapStyle: {
  //   width: Dimensions.get('window').width,
  //   height: Dimensions.get('window').height,
  // },
});
