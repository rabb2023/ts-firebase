import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
//import { getFirestore } from "./node_modules/firebase/firebase-firestore-lite.js";

import { getFirestore, collection, getDocs,addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA5gwMpnDhbztikwW6ANArB6YFtzZwCc-E",
    authDomain: "ts-01-5ad12.firebaseapp.com",
    projectId: "ts-01-5ad12",
    storageBucket: "ts-01-5ad12.appspot.com",
    messagingSenderId: "393686619133",
    appId: "1:393686619133:web:81356febe0549de3fa7f94",
    measurementId: "G-P45PBMS6YW"
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 

let bt =  document.getElementById("inser");

bt.addEventListener('click', async (e) => {
    
    try {
        const docRef = await addDoc(collection(db, "usuarios"), 
        
        {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
          calle: "martin barrera",
          ciudad: "chilpancingo",
        }
        
        );
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

})