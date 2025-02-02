// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTrg2PZ-tAzT4YEnvSXGizypOH9CZA0Yg",
  authDomain: "appscouting-bc60f.firebaseapp.com",
  projectId: "appscouting-bc60f",
  storageBucket: "appscouting-bc60f.firebasestorage.app",
  messagingSenderId: "310436457606",
  appId: "1:310436457606:web:2916cfb1b086c933de3507",
  measurementId: "G-T61CE8CBDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore
const auth = getAuth(app);    // Autenticação
const analytics = getAnalytics(app);

export { db, auth, analytics }; // Exporta as variáveis para serem usadas em outros arquivos
