import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyARtnj7-Mke1ply_ITHi95K_ipSTbl1CZA",
  authDomain: "lmsfroggy.firebaseapp.com",
  databaseURL: "https://lmsfroggy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lmsfroggy",
  storageBucket: "lmsfroggy.firebasestorage.app",
  messagingSenderId: "990818682994",
  appId: "1:990818682994:web:823bc26ac360c2a58c5aeb",
  measurementId: "G-RNBTFF6JB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Avoid "window is not defined" issue during SSR
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export const database = getDatabase(app);
