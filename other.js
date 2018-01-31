const o = {
  a: 'my value is a'
};

const handler = {
  get: function (target, key, descriptor) {
    return target[key];
  },
  set: function (target, key, descriptor) {
    console.log(target, key, descriptor);
    target[key] = descriptor;
  }
};




const prox = new Proxy(o, handler);


const obj = {};
const propertyDescriptor = {
  configurable: true,
  writable: true,
  enumerable: false,
  value: 'alors on danse ?'
};
Object.defineProperty(obj, 'c', propertyDescriptor);

console.log(Object.getOwnPropertyDescriptors(obj));

Object.defineProperty(obj, 'c', {
  enumerable: true
});

console.log(Object.getOwnPropertyDescriptors(obj));


const sum = tab => tab.length ? tab.pop() + sum(tab) : 0;

const summ = tab => tab.reduce((acc, cur) => acc += cur, 100);

console.log(sum([1, 2, 3, 10]));
console.log(summ([1, 2, 3, 10]));

const max = tab => {
  if (!Array.isArray(tab)) return 'Array please';
  if (!tab.length) return 'nothing';
  if (tab.length > 1) {
    if (tab[0] > tab[1]) {
      tab.splice(1, 1);
      return max(tab);
    } else
      return max(tab.slice(1, tab.length));
  } else
    return tab[0];
}

console.log(max([165, 2, 32, 5, 0]));

// const prom = new Promise((resolve, reject) => {
//   resolve('ok');
// });

const prom = new Promise(r => setTimeout(() => r('prom'), 2500));

const obs = new Rx.Observable.of('obs').delay(1000).toPromise();

async function exec() {
  console.log(1);
  // prom.then(v => console.log(v));
  // obs.then(v => console.log(v));
  const start = Date.now();
  console.log(await obs);
  console.log(Date.now() - start); //1000ms
  console.log(await prom);
  console.log(Date.now() - start); //2500ms
  console.log(await obs);
  console.log(Date.now() - start); //2500ms
  console.log(2);
}

exec();

const multiplyBy3 = v => v * 3;
const multiplyBy5 = v => v * 5;

const mapper = fn => tab => tab.map(fn);

// console.log([1, 2, 3].map(multiplyBy5));

console.log(mapper(multiplyBy5)([1, 2, 3]));
console.log(mapper(multiplyBy3)([1, 2, 3]));

const arr1 = [
  { name: 'bob', type: 0 },
  { name: 'marley', type: 1 },
  { name: 'heyo', type: 0 }
];
const arr2 = [0, 5, 6];
arr1.filter(e => arr2.includes(e.type)).map(e => e.name);
