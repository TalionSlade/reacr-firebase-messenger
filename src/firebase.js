import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
       
    apiKey: "AIzaSyBBL50sKWH3fmPR0rhgp6xTj4pIR_jIoUg",
    authDomain: "react-messenger-3f3cc.firebaseapp.com",
    databaseURL: "https://react-messenger-3f3cc.firebaseio.com",
    projectId: "react-messenger-3f3cc",
    storageBucket: "react-messenger-3f3cc.appspot.com",
    messagingSenderId: "705078795569",
    appId: "1:705078795569:web:62082d40bbc4b89582e410",
    measurementId: "G-L4H4VHJ3TK"
    
});

const db = firebaseApp.firestore();

export default db;