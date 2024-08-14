const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB3a_IoywOWx-OCX3R_3WvfKqoRfsFjbSU",
  authDomain: "clg-web-a306b.firebaseapp.com",
  databaseURL: "https://clg-web-a306b-default-rtdb.firebaseio.com",
  projectId: "clg-web-a306b",
  storageBucket: "clg-web-a306b.appspot.com",
  messagingSenderId: "544071229427",
  appId: "1:544071229427:web:c9c0cbea46096761763c86",
  measurementId: "G-W0M1Z31HWV"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
