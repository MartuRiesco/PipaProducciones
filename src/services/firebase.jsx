import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, where, query } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAa3V7dUnLkK2z8hY2gVboaN0ci5AuICxI",
    authDomain: "pipaproducciones-927cc.firebaseapp.com",
    projectId: "pipaproducciones-927cc",
    storageBucket: "pipaproducciones-927cc.appspot.com",
    messagingSenderId: "868487652259",
    appId: "1:868487652259:web:4257dcd88d3f0b3375b016"
  };
  

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export async function getProyectos() {
    const coleccionProductos = collection(db,'proyectos');
  let snapshotProducts= await getDocs(coleccionProductos)
  const documents= snapshotProducts.docs;
   const dataProducts= documents.map(doc=>doc.data())
  return dataProducts
  }
  export async function getProyectosCom() {
    const coleccionProductos = collection(db,'proyectosCom');
  let snapshotProducts= await getDocs(coleccionProductos)
  const documents= snapshotProducts.docs;
   const dataProducts= documents.map(doc=>doc.data())
  return dataProducts
  }
  export async function getProyectosEventos() {
    const coleccionProductos = collection(db,'proyectosEv');
  let snapshotProducts= await getDocs(coleccionProductos)
  const documents= snapshotProducts.docs;
   const dataProducts= documents.map(doc=>doc.data())
  return dataProducts
  }
  export async function getProyectosCompletos(categoriaURL) {
    console.log(categoriaURL);
      const coleccionProductos = collection(db, 'proyectosCompletos');
      const q = query(coleccionProductos, where('category', '==', categoriaURL));
      let snapshotProductos = await getDocs(q);
      const documents = snapshotProductos.docs;
      console.log(snapshotProductos.docs)
      const dataProductos = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(dataProductos);
      return dataProductos;
    }