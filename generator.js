function* test() {
  for (var i = 0; i < 5; i++) {
    yield i;
  }
}

const myIt = test();

const display = it => console.log(it.next());

// display(myIt);
// display(myIt);

const s = new Set();

s.add('1');
s.add(2);
s.add(true);

const handler = {
  get: function (target, key, d) {
    console.log(target, key, d);
    return target;
  }
};

const prox = new Proxy(s, handler);

console.log(prox);

// for (let item of prox.target) {
//   console.log(item);
//   // prox.target.delete(item);
// }


