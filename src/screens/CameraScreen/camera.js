import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import database from '@react-native-firebase/database';
import { firebase } from '../LoginScreen/config';


export default function CameraApp() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let camera = useRef(Camera);

  function addNewTodo() {
    firebase.database().ref('/todos').push({
      name: 'Ada Lovelace',
      age: 31
    })
  }
  const capturedPhoto = async () => {
    const photo = await camera.takePictureAsync()
    console.log(photo)
    const usersRef = firebase.firestore().collection('pictures')
    usersRef
    .add({
     photo:photo
    })
    .then(() => {
      console.log('User added!');
    });
  }

  useEffect(() => {
    (async () => {
      let { status } = await Permissions.askAsync(Permissions.CAMERA);

      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}
        ref={ref => {
          camera = ref;
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginTop: 800, marginLeft: 800, marginBottom: 10, color: 'red' }}>
              {' '}
              Flip{' '}
            </Text>

            <Button onPress={capturedPhoto} title="Capture" >

            </Button>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

// import {StatusBar} from 'expo-status-bar'
// import React from 'react'
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
// import {Camera} from 'expo-camera'
// import { useRef } from 'react'

// // let camera : Camera

// export default function CameraApp() {
//     const [toggleCamera, setToggleCamera] = React.useState(false)
//     const [previewVisible, setPreviewVisible] = React.useState(false)
//     const [capturedImage, setCapturedImage] = React.useState(null)
//     const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
//     const [flashMode, setFlashMode] = React.useState('off')
//     let camera = useRef(Camera)
//     const __startCamera = async () => {
//       const {status} = await Camera.requestPermissionsAsync()
//       setHasPermission(status === 'granted')
//       console.log(status)
//       if (status === 'granted') {
//         setStartCamera(true)
//       } else {
//         Alert.alert('Access denied')
//       }
//     }
//     const __takePicture = async () => {
//       const photo  = await camera.takePictureAsync()
//       console.log(photo)
//       setPreviewVisible(true)
//       //setStartCamera(false)
//       setCapturedImage(photo)
//     }
//     const __savePhoto = () => {}
//     const __retakePicture = () => {
//       setCapturedImage(null)
//       setPreviewVisible(false)
//       __startCamera()
//     }
//     const __handleFlashMode = () => {
//       if (flashMode === 'on') {
//         setFlashMode('off')
//       } else if (flashMode === 'off') {
//         setFlashMode('on')
//       } else {
//         setFlashMode('auto')
//       }
//     }
//     const __switchCamera = () => {
//       if (cameraType === 'back') {
//         setCameraType('front')
//       } else {
//         setCameraType('back')
//       }
//     }
//     return (
//       <View style={styles.container}>
//         {toggleCamera ? (
//           <View
//             style={{
//               flex: 1,
//               width: '100%'
//             }}
//           >
//             {previewVisible && capturedImage ? (
//               <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
//             ) : (
//               <Camera
//                 type={cameraType}
//                 flashMode={flashMode}
//                 style={{flex: 1}}
//                 ref={(r) => {
//                   camera = r
//                 }}
//               >
//                 <View
//                   style={{
//                     flex: 1,
//                     width: '100%',
//                     backgroundColor: 'transparent',
//                     flexDirection: 'row'
//                   }}
//                 >
//                   <View
//                     style={{
//                       position: 'absolute',
//                       left: '5%',
//                       top: '10%',
//                       flexDirection: 'column',
//                       justifyContent: 'space-between'
//                     }}
//                   >
//                     <TouchableOpacity
//                       onPress={__handleFlashMode}
//                       style={{
//                         backgroundColor: flashMode === 'off' ? '#000' : '#fff',
//                         borderRadius: 50,
//                         height: 25,
//                         width: 25
//                       }}
//                     >
//                       <Text
//                         style={{
//                           fontSize: 20
//                         }}
//                       >
//                         ⚡️
//                       </Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       onPress={__switchCamera}
//                       style={{
//                         marginTop: 20,
//                         borderRadius: 50,
//                         height: 25,
//                         width: 25
//                       }}
//                     >
//                       <Text
//                         style={{
//                           fontSize: 20
//                         }}
//                       >
//                         {cameraType === 'front' ? '🤳' : '📷'}
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                   <View
//                     style={{
//                       position: 'absolute',
//                       bottom: 0,
//                       flexDirection: 'row',
//                       flex: 1,
//                       width: '100%',
//                       padding: 20,
//                       justifyContent: 'space-between'
//                     }}
//                   >
//                     <View
//                       style={{
//                         alignSelf: 'center',
//                         flex: 1,
//                         alignItems: 'center'
//                       }}
//                     >
//                       <TouchableOpacity
//                         onPress={__takePicture}
//                         style={{
//                           width: 70,
//                           height: 70,
//                           bottom: 0,
//                           borderRadius: 50,
//                           backgroundColor: '#fff'
//                         }}
//                       />
//                     </View>
//                   </View>
//                 </View>
//               </Camera>
//             )}
//           </View>
//         ) : (
//           <View
//             style={{
//               flex: 1,
//               backgroundColor: '#fff',
//               justifyContent: 'center',
//               alignItems: 'center'
//             }}
//           >
//             <TouchableOpacity
//               onPress={__startCamera}
//               style={{
//                 width: 130,
//                 borderRadius: 4,
//                 backgroundColor: '#14274e',
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 height: 40
//               }}
//             >
//               <Text
//                 style={{
//                   color: '#fff',
//                   fontWeight: 'bold',
//                   textAlign: 'center'
//                 }}
//               >
//                 Take picture
//               </Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         <StatusBar style="auto" />
//       </View>
//     )
//   }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }
//   })

//   const CameraPreview = ({photo, retakePicture, savePhoto}) => {
//     console.log('sdsfds', photo)
//     return (
//       <View
//         style={{
//           backgroundColor: 'transparent',
//           flex: 1,
//           width: '100%',
//           height: '100%'
//         }}
//       >
//         <ImageBackground
//           source={{uri: photo && photo.uri}}
//           style={{
//             flex: 1
//           }}
//         >
//           <View
//             style={{
//               flex: 1,
//               flexDirection: 'column',
//               padding: 15,
//               justifyContent: 'flex-end'
//             }}
//           >
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between'
//               }}
//             >
//               <TouchableOpacity
//                 onPress={retakePicture}
//                 style={{
//                   width: 130,
//                   height: 40,

//                   alignItems: 'center',
//                   borderRadius: 4
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: '#fff',
//                     fontSize: 20
//                   }}
//                 >
//                   Re-take
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={savePhoto}
//                 style={{
//                   width: 130,
//                   height: 40,

//                   alignItems: 'center',
//                   borderRadius: 4
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: '#fff',
//                     fontSize: 20
//                   }}
//                 >
//                   save photo
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ImageBackground>
//       </View>
//     )
//   }  
