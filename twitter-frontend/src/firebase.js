import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7JtOru2Ek09DnV670VKHXCxKzNahamGE",
    authDomain: "twitter-clone-d823c.firebaseapp.com",
    projectId: "twitter-clone-d823c",
    storageBucket: "twitter-clone-d823c.appspot.com",
    messagingSenderId: "4946061743",
    appId: "1:4946061743:web:2b74e0673c9a74684b275a",
    measurementId: "G-5BV9FX5SWC"
  };

  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)






  export default db