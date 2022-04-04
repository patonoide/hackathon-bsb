import {createDocInSubCollection, getInnerCollectionList} from "../firebase/firestore/firestore_interface";
import Transaction from "../models/transaction";


export async function createTransaction(userId, date, status){
    let transaction = new Transaction(date, status)

    await createDocInSubCollection(userId, 'transactions', transaction)

}

export async function getTransactions(userId){
    let transactions = await getInnerCollectionList(userId, 'transactions', Transaction.fromJson)
    console.log(transactions)
    return transactions
}