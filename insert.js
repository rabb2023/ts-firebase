import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
//import { getFirestore } from "./node_modules/firebase/firebase-firestore-lite.js";

import { getFirestore, collection, getDocs,addDoc ,doc, onSnapshot,query} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
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




let bti =  document.getElementById("inser");

let btc =  document.getElementById("consu");

const tablaUsuarios = document.querySelector("#tbUsuarios")

bti.addEventListener('click', async (e) => {
    
  let nom = document.getElementById("nombre");

    try {
        const docRef = await addDoc(collection(db, "usuarios"), 
        
        {
          nombre: nom.value,
          ap: document.getElementById("ap").value,
          correo: document.getElementById("correo").value,
          tel: document.getElementById("cel").value,
          favorites: { food: "Pizza", color: "Blue", subject: "recess" },
         
        }
        
        );
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

})

btc.addEventListener('click', async (e)=> {

  ShowUsers()
  viewUsuarios2()
})


async function ShowUsers() {

  tbUsuarios.innerHTML = ""
  const Allusers = await ViewUsuarios()


  Allusers.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //  console.log(doc.id, " => ", doc.data());
      const datos = doc.data()
      
      tbUsuarios.innerHTML += `<tr>
      <td>${datos.nombre}</td>
      <td>${datos.ap}</td>
    
      <td>${datos.tel}</td>
      <td>
          <button class="btn-primary btn m-1 editar_" data-id="${doc.id}" >
          <i class="bi bi-pencil-square"></i> Editar 
          <span class="spinner-border spinner-border-sm" id="Edit-${doc.id}" style="display: none;"></span>
          </button> 
          <button class="btn-danger btn eliminar_"  data-id="${doc.id}|${datos.nombre}" >
          <i class="bi bi-trash"></i> Eliminar 
          <span class="spinner-border spinner-border-sm" id="elim-${doc.id}" style="display: none;"></span>
          
          </button>
      </td>
   
      </tr>`

  });


}

 async function ViewUsuarios() {
  const userRef = collection(db, "usuarios")
  const Allusers = await getDocs(userRef)
  return Allusers
}

async function viewUsuarios2(){

  const q = query(collection(db, "usuarios"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data().ciudad);
  });
  console.log("Current cities in CA: ", cities.join(", "));
});
}

$("#tbUsuarios").on("click", ".eliminar_", async function () {

  const producto_id = $(this).data("id")
  console.log("click en " + producto_id)


  try {
     


    

  } catch (error) {
      console.log("error", error)

  }

})
