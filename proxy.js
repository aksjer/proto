const o = { a: 'a' };

const handler = {
  get: function (target, key) {
    return key in target ? target[key] : 'oops';
  },
  set: function (target, key, descriptor) {
    console.log('set');
    target[key] = descriptor;
  }
};

const p = new Proxy(o, handler);

console.log(p.a);
console.log(p.b);
p.b = 'b or not b';
console.log(p.b);