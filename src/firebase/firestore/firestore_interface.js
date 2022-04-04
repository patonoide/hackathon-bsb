import { db } from "../../firebase_init";
import { collection, addDoc, setDoc, getDoc, doc, getDocs, } from "firebase/firestore";



  export async function createDocument(document, id, collection) {
    await setDoc(doc(db, collection, id), document.toJson());
  }

  export async function getDocument(value, collection, document){
    const docRef = doc(db, collection, value);
    const docSnap = await getDoc(docRef);

    return document.fromJson(docSnap.data())
  }

  export async function getInnerCollectionList(userId, collectionName, fromJson){
    console.log()
    // const userDoc = doc(db, userId, 'users')
    const collectionRef = collection(db, 'users', userId,  collectionName );
    const docs = await getDocs(collectionRef)
    let list = []
    docs.docs.map((item)=>{
      console.log(item)
      list.push(fromJson(item.data()))

    })
    return list
  }

  export async function createDocInSubCollection(userId, collectionName, document){
    console.log(userId)
    console.log(document)
    const userDoc = doc(db, "users", userId)
    const docsRef = collection(userDoc, collectionName);
    await addDoc(docsRef, document.toJson())

}

