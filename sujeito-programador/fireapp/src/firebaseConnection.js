import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAf1-cOPhL-H997xN504rBLrihJABnyndA",
    authDomain: "colegio-1b43c.firebaseapp.com",
    projectId: "colegio-1b43c",
    storageBucket: "colegio-1b43c.appspot.com",
    messagingSenderId: "686413222236",
    appId: "1:686413222236:web:72f67b09b2c22e97c3b199",
    measurementId: "G-WGJF7NJ6HG"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };