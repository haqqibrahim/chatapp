// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzovh6zYzEsErHCMZrgoRFAsiuWnaHLIg",
  authDomain: "chatapp-d181d.firebaseapp.com",
  projectId: "chatapp-d181d",
  storageBucket: "chatapp-d181d.appspot.com",
  messagingSenderId: "566043344849",
  appId: "1:566043344849:web:ecd389a9f3a77de010aaf0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
