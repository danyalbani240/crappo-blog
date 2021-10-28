import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAvaIybuUdd_YpNPSbjs9HIQgWbp-4f8aU",
  authDomain: "crappo-blog.firebaseapp.com",
  projectId: "crappo-blog",
  storageBucket: "crappo-blog.appspot.com",
  messagingSenderId: "545454069117",
  appId: "1:545454069117:web:a7d4a7d90803df0daba814",
};
//init firebase
firebase.initializeApp(firebaseConfig);
//init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFirestore,timestamp };
