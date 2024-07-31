// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH-0SqHQ_UxCsrC93-hMuGxVc64lzVyMY",
  authDomain: "movieontip.firebaseapp.com",
  projectId: "movieontip",
  storageBucket: "movieontip.appspot.com",
  messagingSenderId: "470106861061",
  appId: "1:470106861061:web:513265ddd4f0724c9f366c",
  measurementId: "G-P1R4KHHYQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore

export { app, auth, db, analytics };
