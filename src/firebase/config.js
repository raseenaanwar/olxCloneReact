import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhDBANmjkCQmbeIDXygACd7F_KPj2VMmQ",
    authDomain: "olxclone-68351.firebaseapp.com",
    projectId: "olxclone-68351",
    storageBucket: "olxclone-68351.appspot.com",
    messagingSenderId: "623199857325",
    appId: "1:623199857325:web:a84b3bed04aab3c283b424",
    measurementId: "G-3ZBYQXBQLM"
  };

 export  default firebase.initializeApp(firebaseConfig)