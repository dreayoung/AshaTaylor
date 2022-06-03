import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDwa5MIStQYdQ9e-t1JTgsXAM-UDXIZnB8',
  authDomain: 'ashataylorportfolio.firebaseapp.com',
  projectId: 'ashataylorportfolio',
  storageBucket: 'ashataylorportfolio.appspot.com',
  messagingSenderId: '763772930237',
  appId: '1:763772930237:web:585d842ef5b63bd4718fd4',
  measurementId: 'G-5MHKB5X7T2',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);