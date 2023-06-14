
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyAQDJlL6fwlP8DtJITJnaEIra9qe_DO89k",
  authDomain: "touch-and-go-48e3e.firebaseapp.com",
  projectId: "touch-and-go-48e3e",
  storageBucket: "touch-and-go-48e3e.appspot.com",
  messagingSenderId: "396593375474",
  appId: "1:396593375474:web:c75ffeb31dac78341d086b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app); 