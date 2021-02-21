// import { utils } from '@react-native-firebase/app';
// import ml from '@react-native-firebase/ml';
// import React, { useCallback } from 'react';
// import { View, Text } from 'react-native';

// function processDocument(localPath) {
//   const processed = await ml().cloudDocumentTextRecognizerProcessImage('../../Desktop/PXL_20210221_005646951.MP.jpg');

//   console.log('Found text in document: ', processed.text);

//   processed.blocks.forEach(block => {
//     console.log('Found block with text: ', block.text);
//     console.log('Confidence in block: ', block.confidence);
//     console.log('Languages found in block: ', block.recognizedLanguages);
//   });
// }

// // Local path to file on the device
// const localFile = `${utils.FilePath.PICTURES_DIRECTORY}/text-document.jpg`;

// export default function main() {
//     processDocument(localFile).then(() => console.log('Finished processing file.'));
//     return <View><Text>hello</Text></View>
    
    
// }
