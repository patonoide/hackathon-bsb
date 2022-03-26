import firebase, { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = require("./firebase_config.json");

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
export default firebase;
