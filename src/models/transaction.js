
export default class Transaction {
    constructor(date, status) {
        this.date = date
        this.status = status

    }

    fromJson(obj){
        this.date = obj.date
        this.status = obj.status

    }
    static fromJson(obj){
        // obj.date = obj.date.toDate()
        return new Transaction(obj.date, obj.status)
    }

    toJson() {
        return { date: this.date, status: this.status };
    }
}
