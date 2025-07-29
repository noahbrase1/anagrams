// firebase.js
import { initializeApp } from "firebase/app"
import { getAuth, signInAnonymously } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Replace with your config from Firebase Console
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, signInAnonymously }
