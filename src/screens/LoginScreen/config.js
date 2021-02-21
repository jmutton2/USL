import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBYLpdx0hB71ExJpfnGWBEHr1F7a2htVM0',
  authDomain: 'university-student-life.firebaseapp.com',
  databaseURL: 'https://university-student-life-default-rtdb.firebaseio.com/',
  projectId: 'university-student-life',
  appId: '1:800778440641:android:f7fd0d419eb90ff61da940',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}
export { firebase };