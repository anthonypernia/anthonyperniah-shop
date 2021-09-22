
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBLaB9SoWQNguF9JEsXu8h7VlPiUYwWcVk",
  authDomain: "anthonyperniah-shop.firebaseapp.com",
  projectId: "anthonyperniah-shop",
  storageBucket: "anthonyperniah-shop.appspot.com",
  messagingSenderId: "176965251790",
  appId: "1:176965251790:web:cdf05be302850b69bcd69f"
};

// Initialize Firebase y lo pongo en app
initializeApp(firebaseConfig);

// getDatabase devuelve la conexion con firestore a mi app
export const getDatabase = () => getFirestore();

