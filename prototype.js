function Person(name) {
  this.name = name;
  this.hello = function () {
    return `Hello, my name is ${this.name}`;
  }
}

Person.prototype.human = function () {
  return `${this.hello()} and I'm Human :)`;
}

const p1 = new Person('Bob');
