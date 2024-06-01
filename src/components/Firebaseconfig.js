import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKoT37eqybqa6y7w0YkjGb3GlSCkL6CDk",
  authDomain: "reactproject-4f8f1.firebaseapp.com",
  projectId: "reactproject-4f8f1",
  storageBucket: "reactproject-4f8f1.appspot.com",
  messagingSenderId: "545632028801",
  appId: "1:545632028801:web:5fca9f4b06028bdd086580",
  measurementId: "G-6P7MH9FBZJ"
};


const app = initializeApp(firebaseConfig);
export  const database = getAuth(app);