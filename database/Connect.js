// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR1UBQiAZFvOUiWmH5bfHgiLoTpFtYhQw",
  authDomain: "project1-4aa29.firebaseapp.com",
  projectId: "project1-4aa29",
  storageBucket: "project1-4aa29.appspot.com",
  messagingSenderId: "404391113446",
  appId: "1:404391113446:web:bff146370fb75848644127",
  measurementId: "G-SWCC5PN43E"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp