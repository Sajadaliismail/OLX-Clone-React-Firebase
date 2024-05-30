import firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAoS6FZfSKEdDdhiYcysLqPjhO5txtvi1s",
    authDomain: "olx-clone-af1eb.firebaseapp.com",
    projectId: "olx-clone-af1eb",
    storageBucket: "olx-clone-af1eb.appspot.com",
    messagingSenderId: "90969825223",
    appId: "1:90969825223:web:d11cf94afdb4b527af43e2",
    measurementId: "G-NSGQSP2YWC"
  };
  
  export default firebase.initializeApp(firebaseConfig)
