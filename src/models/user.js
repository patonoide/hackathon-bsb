export default class User {
  constructor(email, cpf, points) {
    this.email = email;
    this.cpf = cpf;
    this.points = points;
  }

  fromJson(obj){
    this.email = obj.email
    this.cpf = obj.cpf
    this.points = obj.points
  }

  static fromJson(obj){
    return new User(obj)
  }

  toJson() {
    return { email: this.email, cpf: this.cpf, points: this.points };
  }
}
