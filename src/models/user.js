export default class User {
  constructor(email, cpf, points) {
    this.email = email;
    this.cpf = cpf;
    this.points = points;
  }

  toJson() {
    return { email: this.email, cpf: this.cpf, points: this.points };
  }
}
