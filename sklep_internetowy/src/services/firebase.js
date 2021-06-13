import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsJJPTtl4iTZ6qyUPdLVy5QCa3EEOyrjA",
    authDomain: "zaliczenie-226d4.firebaseapp.com",
    projectId: "zaliczenie-226d4",
    storageBucket: "zaliczenie-226d4.appspot.com",
    messagingSenderId: "67605113412",
    appId: "1:67605113412:web:91bb5b2a34823796c62a11"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

var db = firebaseApp.firestore();

export { db };