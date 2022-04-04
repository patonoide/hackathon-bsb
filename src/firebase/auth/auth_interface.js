import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "firebase_init";




  export async function authCreateUser(email, password) {
    try {
      let credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return credential.user.uid;
    } catch (e) {
      throw e.message;
    }
  }

  export async function authLoginUser(email, password) {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return credential.user.uid;
    } catch (e) {
      throw e.message;
    }
  }
