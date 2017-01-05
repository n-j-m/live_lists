import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAeBvM9iflkAj2lQWH32Hi2CM7pGGOhq9c",
  authDomain: "livelists-b04ac.firebaseapp.com",
  databaseURL: "https://livelists-b04ac.firebaseio.com",
  storageBucket: "livelists-b04ac.appspot.com",
  messagingSenderId: "183410923863"
};

firebase.initializeApp(config);

export default firebase;
