// firebase.js
import { initializeApp } from "firebase/app"
import { getAuth, signInAnonymously } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// ✅ Use the real config from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-Gf_Lsjd9_fusxjckzxmL_iFGvdBfOHo",
  authDomain: "anagramsfake.firebaseapp.com",
  projectId: "anagramsfake",
  storageBucket: "anagramsfake.appspot.com", // FIXED typo: was .firebasestorage.app
  messagingSenderId: "172279139875",
  appId: "1:172279139875:web:7c47a2852ae2b8bc22ab96",
  measurementId: "G-XE7PPZYDY7"
}

// ✅ Initialize
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, signInAnonymously }
