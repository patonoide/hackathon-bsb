import AuthInterface from "../firebase/auth/auth_interface";
import FirestoreInterface from "../firebase/firestore/firestore_interface";
import User from "../models/user";

export default class UserRepository {

    async static createUser(email, password, cpf){
        try {
            const auth_user = await AuthInterface.createUser(email, password)
            const doc = User(email, cpf, 0)
            await FirestoreInterface.createDocument(doc, id, 'users')
            return 'success'
        }catch (e) {
            return e
        }
    }



}