// src/config/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaJoShQfR4Bdb93dADLrc_zLh7QqNatlc",
  authDomain: "meu-bairro-mobile.firebaseapp.com",
  projectId: "meu-bairro-mobile",
  storageBucket: "meu-bairro-mobile.appspot.com",
  messagingSenderId: "760722872746",
  appId: "1:760722872746:web:4b0a351af1d863f7df33d3",
  measurementId: "G-M3KFBH8R8Q",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Exportar o serviço de autenticação
export const auth = getAuth(app);
export default app;
