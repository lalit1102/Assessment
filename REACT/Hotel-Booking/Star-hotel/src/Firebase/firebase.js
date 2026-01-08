import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRohWSSkNKwPMLUlPpNVcx13IsYrmZDgQ",
  authDomain: "star-hotel-5ef8a.firebaseapp.com",
  projectId: "star-hotel-5ef8a",
  storageBucket: "star-hotel-5ef8a.appspot.com", // fixed here
  messagingSenderId: "972510759036",
  appId: "1:972510759036:web:cdfac5ad694a7caf82a1f9",
  measurementId: "G-FL943HTR7M"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
