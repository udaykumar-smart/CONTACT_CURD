import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyACHhSAvCADrDsvzLokL7s5HCaz9CKEzb8",
  authDomain: "contact-curd.firebaseapp.com",
  databaseURL: "https://contact-curd.firebaseio.com",
  projectId: "contact-curd",
  storageBucket: "contact-curd.appspot.com",
  messagingSenderId: "682415267003",
  appId: "1:682415267003:web:8bbeae2e2efbbb6c4fdd9e",
  measurementId: "G-E5S3FHZS55"
 };  
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);


export default fireDb.database().ref();