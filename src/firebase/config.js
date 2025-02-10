import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKrj2T4zvxG3hMKlpSsC7T5b05D0TzYAo",
  authDomain: "xfinity-5c690.firebaseapp.com",
  projectId: "xfinity-5c690",
  storageBucket: "xfinity-5c690.firebasestorage.app",
  messagingSenderId: "973284889598",
  appId: "1:973284889598:web:434f83c451db6e5a5066af",
  measurementId: "G-X8KYFSZGW9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);