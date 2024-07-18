import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAm-51Sy6YZISoR_LIH9Eh21SkkwGMtuL8",
  authDomain: "health-rag.firebaseapp.com",
  projectId: "health-rag",
  storageBucket: "health-rag.appspot.com",
  messagingSenderId: "1077514819681",
  appId: "1:1077514819681:web:b5f9a2fc38961752a0f220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;