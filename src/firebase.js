const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyBvibcO-9743JDqGIwrA8oaViqLDDtvJJQ',
  authDomain: 'evernote-clone-f38cc.firebaseapp.com',
  databaseURL: 'https://evernote-clone-f38cc.firebaseio.com',
  projectId: 'evernote-clone-f38cc',
  storageBucket: 'evernote-clone-f38cc.appspot.com',
  messagingSenderId: '1087362330229',
  appId: '1:1087362330229:web:6662ae6b3d3157a511523c',
  measurementId: 'G-GBP1MBTCMK',
});

export default firebase;
