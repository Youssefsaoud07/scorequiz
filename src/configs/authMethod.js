import firebase from "firebase/app"
import 'firebase/firestore'
import{getFirestore} from "firebase/firestore"
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyCUKj62vAWg1y1lb9c7iADUmsRHyBBQFVk",
  authDomain: "corequiz-5553d.firebaseapp.com",
  projectId: "corequiz-5553d",
  storageBucket: "corequiz-5553d.appspot.com",
  messagingSenderId: "433520386811",
  appId: "1:433520386811:web:a3d9f1563bf9d16a88c65e",
  measurementId: "G-8TJDR50V4N"
});
export default app
