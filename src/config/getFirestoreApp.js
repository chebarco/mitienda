import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCST3RTRbZ25u1xmdqLC2PRP5Y67z_7UE4",
  authDomain: "tiendadechocolates-22a80.firebaseapp.com",
  projectId: "tiendadechocolates-22a80",
  storageBucket: "tiendadechocolates-22a80.appspot.com",
  messagingSenderId: "917028776747",
  appId: "1:917028776747:web:7fdaefa4b709a01f76736e"
};

const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
    return app
}
