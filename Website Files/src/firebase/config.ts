import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyA1G0m4qcc92M2181PM-MFkxL7M1y6Afpo",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "skill-gap-35a66.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "skill-gap-35a66",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "skill-gap-35a66.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "570682841937",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:570682841937:web:065a4ce71a18732ef71170",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-8X1S6E8LS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  updateProfile,
  sendPasswordResetEmail
};
