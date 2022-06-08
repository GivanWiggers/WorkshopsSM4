// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIw8jCfJWJMqSmQspENXpTuUvlcnfbjs0",
  authDomain: "carshare-4cfd4.firebaseapp.com",
  projectId: "carshare-4cfd4",
  storageBucket: "carshare-4cfd4.appspot.com",
  messagingSenderId: "862112496868",
  appId: "1:862112496868:web:2eebe4ac5a7c9572d800f1",
  measurementId: "G-BZCBLBZSK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider(app)
export {auth}
export {provider}
export {db}


//Dit moet dus binnen een normale file, en met app initializen kun je daarna firebase gebruiken.

//Voorbeeld warbij Cloud Firestore lite SDK wordt gebruikt of een lijst op te halen:

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

//BENODIGDHEDEN:
// API KEY, Domain, databaseURL, projectId