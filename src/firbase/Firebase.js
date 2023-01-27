// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh3LeD2QyiPq4VPCIViNwJqbDwOg9F6e8",
  authDomain: "themovies-1e65b.firebaseapp.com",
  projectId: "themovies-1e65b",
  storageBucket: "themovies-1e65b.appspot.com",
  messagingSenderId: "128142024033",
  appId: "1:128142024033:web:ebe5889c3005c8e160b920"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

//collection have two argument one is database second is collection
export const moviesRef = collection(db, 'movies')

export default app