import  {authCreateUser, authLoginUser} from "../firebase/auth/auth_interface";

import User from "../models/user";
import {createDocument, getDocument} from "../firebase/firestore/firestore_interface";



     export async function createUser(email, password, cpf){
        try {
            const id = await authCreateUser(email, password)
            const doc = new User(email, cpf, 0)
            await createDocument(doc, id, 'users')
            return 'success'
        }catch (e) {
            return e
        }
    }

    export async function loginUser(email, password){
        try {
            const id = await authLoginUser(email, password)
            let doc = new User('', '', '')
            await getDocument(id, 'users', doc)
            return doc
        }catch (e) {
            return e
        }
    }



