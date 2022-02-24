import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyDSi0QLsrrr-hq3DWKSaaUDq-rRRGh1NOY",
  authDomain: "jrnl-7e606.firebaseapp.com",
  projectId: "jrnl-7e606",
  storageBucket: "jrnl-7e606.appspot.com",
  messagingSenderId: "56356826329",
  appId: "1:56356826329:web:47b302df53882b0999e2c8",
  measurementId: "G-MDVLYT5W3H"
};
export const app = initializeApp(firebaseConfig) 
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const db = getFirestore()