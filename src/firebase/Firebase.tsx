import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rocket-mons.firebaseapp.com",
  projectId: "rocket-mons",
  storageBucket: "rocket-mons.appspot.com",
  messagingSenderId: "387211828526",
  appId: "1:387211828526:web:aabba622309e242609eebf"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);