import * as firebase from firebase;
import Environment from './environments'
firebase.initializeApp({
  apiKey: 'AIzaSyBYLpdx0hB71ExJpfnGWBEHr1F7a2htVM0',
  authDomain: 'university-student-life.firebaseapp.com',
  databaseURL: 'https://university-student-life-default-rtdb.firebaseio.com/',
  projectId: 'university-student-life',
  storageBucket: 'https://console.firebase.google.com/project/university-student-life/storage/university-student-life.appspot.com/files',
  messagingSenderId: 'XXXX'
});
export default firebase;