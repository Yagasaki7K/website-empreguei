import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvyd0uZSUl7DE2FPIC_HGFBxKkaM8V9EI",
  authDomain: "empreguei-13685.firebaseapp.com",
  projectId: "empreguei-13685",
  storageBucket: "empreguei-13685.appspot.com",
  messagingSenderId: "118270187235",
  appId: "1:118270187235:web:750bd87c22cc96f59d17d6",
  measurementId: "G-N0XRDGR8ZL",
};

const app = initializeApp(firebaseConfig);
const database = initializeFirestore(app, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
});

export default database;
