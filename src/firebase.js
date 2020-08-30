import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDHXQP0iNjGcPeDUomE2GHDkXvMhc6Vu7M",
  authDomain: "zcatalyst-c1701.firebaseapp.com",
  databaseURL: "https://zcatalyst-c1701.firebaseio.com",
  projectId: "zcatalyst-c1701",
  storageBucket: "zcatalyst-c1701.appspot.com",
  messagingSenderId: "28300739442",
  appId: "1:28300739442:web:4ca175956c0bc0f97413eb",
  measurementId: "G-QGYKRPWYBX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default database;
