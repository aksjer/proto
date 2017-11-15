// const o = { a: 'a' };
// const handler = {
//   deleteProperty: function (target, key) {
//     console.log(`delete property : ${key}`);
//   }
// };
// const p = new Proxy(o, handler);
// delete p.a;
var target = {};
var yay = Object.defineProperty(target, 'foo', { value: 'bar', configurable: false, writable: false });
var yay2 = Reflect.defineProperty(target, 'foo', { value: 'bar', configurable: false, writable: false });
// yay  = {foo:'bar'}
// yay2 = true

yay = Object.defineProperty(target, 'foo', { value: 'barz', configurable: false, writable: false });
// VM96:1 Uncaught TypeError: Cannot redefine property: foo
//     at Function.defineProperty (<anonymous>)
//     at <anonymous>:1:14
// so we need to use try/catch
try{
  yay = Object.defineProperty(target, 'foo', { value: 'barz', configurable: false, writable: false });
}catch(err){
  console.log(err);
}

yay2 = Reflect.defineProperty(target, 'foo', { value: 'barz', configurable: false, writable: false });
// yay2 = false
