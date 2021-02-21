var environments = {
    staging: {
      FIREBASE_API_KEY: 'AIzaSyBYLpdx0hB71ExJpfnGWBEHr1F7a2htVM0',
      FIREBASE_AUTH_DOMAIN: 'university-student-life.firebaseapp.com',
      FIREBASE_DATABASE_URL: 'https://university-student-life-default-rtdb.firebaseio.com/',
      FIREBASE_PROJECT_ID: 'university-student-life',
      FIREBASE_STORAGE_BUCKET: 'https://console.firebase.google.com/project/university-student-life/storage/university-student-life.appspot.com/files',
      FIREBASE_MESSAGING_SENDER_ID: 'XXXX',
      GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyDFzksAeCQRm4Vai6RIEEaX2IhRUVcTCRE'
    },
    production: {
        
    }
  };
  
  function getReleaseChannel() {
    let releaseChannel = Expo.Constants.manifest.releaseChannel;
    if (releaseChannel === undefined) {
      return 'staging';
    } else if (releaseChannel === 'staging') {
      return 'staging';
    } else {
      return 'staging';
    }
  }
  function getEnvironment(env) {
    console.log('Release Channel: ', getReleaseChannel());
    return environments[env];
  }
  var Environment = getEnvironment(getReleaseChannel());
  export default Environment;