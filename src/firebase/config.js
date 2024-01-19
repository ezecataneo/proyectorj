// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-TeUfgrBIQSoqePNhli1IRqKZcS-kHgk",
  authDomain: "rj-cataneo.firebaseapp.com",
  projectId: "rj-cataneo",
  storageBucket: "rj-cataneo.appspot.com",
  messagingSenderId: "410417386137",
  appId: "1:410417386137:web:8213f9f5ec4bce5921de08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)