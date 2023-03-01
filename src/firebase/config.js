// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-PFQo6Myqk3wA0Cm3Hwijouu6kYIfW0M",
  authDomain: "coderhouse-zetaele.firebaseapp.com",
  projectId: "coderhouse-zetaele",
  storageBucket: "coderhouse-zetaele.appspot.com",
  messagingSenderId: "938756272039",
  appId: "1:938756272039:web:cced1c3b6752837a4f9082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app;
