import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBX-_pmfBWoQfMdvA23xiZwrj-6MY9e8AE",
  authDomain: "chat-app-using-socket-ef1d9.firebaseapp.com",
  projectId: "chat-app-using-socket-ef1d9",
  storageBucket: "chat-app-using-socket-ef1d9.appspot.com",
  messagingSenderId: "1018935124463",
  appId: "1:1018935124463:web:5b81ab0052b1547bd9d61a"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage()