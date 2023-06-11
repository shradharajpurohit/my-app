import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAP9qeCMGz74ngBjCrutXsi0FXi7_QA-Yk",
  authDomain: "bookstop-12f2c.firebaseapp.com",
  projectId: "bookstop-12f2c",
  storageBucket: "bookstop-12f2c.appspot.com",
  messagingSenderId: "451913908379",
  appId: "1:451913908379:web:2a4a164dd8cdc4c545863e"
};


const app = initializeApp(firebaseConfig);
 
export default firebase.firestore