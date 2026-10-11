import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA5Jm6WiWaQ0ePuqFRTsWto3-7F9-a-sxQ",
  authDomain: "hiresense-bfcb4.firebaseapp.com",
  projectId: "hiresense-bfcb4",
  storageBucket: "hiresense-bfcb4.firebasestorage.app",
  messagingSenderId: "771444915195",
  appId: "1:771444915195:web:533a947cd327c27a5f695e",
  measurementId: "G-TFT3L8REXF",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
