class Human {
  constructor(name) {
    this._name = name;
  }
  human() {
    return `I'm Human :)`;
  }
}

class Person extends Human {
  constructor(name) {
    super(name);
  }
  hello() {
    return `Hello my name is ${this._name}`;
  }
  get name() {
    return `name : ${this._name}`;
  }
  static timeis() {
    return Date.now();
  }
}

const p1 = new Person('Bob');
const h1 = new Human('Jack');