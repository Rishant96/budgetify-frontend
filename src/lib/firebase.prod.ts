import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyvPex-3WtBKKJ5RJkiuyCUpHBZZw1fwQ",
  authDomain: "personal-budget-f9aed.firebaseapp.com",
  projectId: "personal-budget-f9aed",
  storageBucket: "personal-budget-f9aed.appspot.com",
  messagingSenderId: "528460923514",
  appId: "1:528460923514:web:b4141e8d576350de7071c3"
};

const firebase = Firebase.initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
