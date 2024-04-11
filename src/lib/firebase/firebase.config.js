import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseAPIKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: firebaseAPIKey,
  authDomain: "eduk2-6e379.firebaseapp.com",
  projectId: "eduk2-6e379",
  storageBucket: "eduk2-6e379.appspot.com",
  messagingSenderId: "935107273244",
  appId: "1:935107273244:web:4a4b5e71d13ee967d8b5d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)