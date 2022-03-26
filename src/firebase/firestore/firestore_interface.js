import { db } from "../../firebase_init";
import { collection, addDoc, setDoc } from "firebase/firestore";

export default class FirestoreInterface {
  async static createDocument(doc, id, collection) {
    await setDoc(collection(db, collection), doc.toJson());
  }
}
