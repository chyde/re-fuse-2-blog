import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmisPblYeQik255h4-OBw4zPfCncn42z8",
  authDomain: "re-fuse-2-blog.firebaseapp.com",
  projectId: "re-fuse-2-blog",
  storageBucket: "re-fuse-2-blog.appspot.com",
  messagingSenderId: "252454096776",
  appId: "1:252454096776:web:b6ed892da5c1cd44aff43d",
  measurementId: "G-YHCYWZH9BT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
