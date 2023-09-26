import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBO5IkGf5Vp-6IGaoIbTFSQ07g597TH0Do",
  authDomain: "personal-portfolio-websi-965c7.firebaseapp.com",
  projectId: "personal-portfolio-websi-965c7",
  storageBucket: "personal-portfolio-websi-965c7.appspot.com",
  messagingSenderId: "405107306366",
  appId: "1:405107306366:web:b58a98841869d532a1cd2f",
};

const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);
const auth = getAuth();

export { fireApp, auth, db };
