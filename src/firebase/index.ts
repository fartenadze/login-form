import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOg9sx5o_UVS9JM3d-wgds0GU5OIH-8hE",
  authDomain: "practice-ed854.firebaseapp.com",
  projectId: "practice-ed854",
  storageBucket: "practice-ed854.appspot.com",
  messagingSenderId: "591557512122",
  appId: "1:591557512122:web:15a8a4ce6e4f8c7deaab83",
  measurementId: "G-WBD7XQ4VKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
