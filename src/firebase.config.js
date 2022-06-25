import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCwAKmVlC9A1ADA2HarhRy9bT_c8Uz9J9U",
    authDomain: "restaurants-app-498ac.firebaseapp.com",
    databaseURL: "https://restaurants-app-498ac-default-rtdb.firebaseio.com",
    projectId: "restaurants-app-498ac",
    storageBucket: "restaurants-app-498ac.appspot.com",
    messagingSenderId: "537053540080",
    appId: "1:537053540080:web:20ffd22dd85fc05e6a5c35"
  };
  

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };