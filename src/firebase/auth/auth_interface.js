import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "firebase_init";

export default class AuthInterface {
  async static createUser(email, password) {
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

  async static loginUser(email, password) {
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
}
