// let zone = Zone.current;
// let main = () => {
//     console.log('a');
//     setTimeout(() => console.log('b'), 2000);
//     console.log('c');
// };

// let myZone = zone.fork({
//     name: 'myZone',
//     onFork(delegate, currentZone, targetZone, zoneSpec) {
//         console.log('create');
//         return delegate.fork(targetZone, zoneSpec);
//     },
//     onInvoke(delegate, current, target, task, applyThis, applyArgs, source) {
//         console.log(new Date().getSeconds());
//         return delegate.invoke(target, task, applyThis, applyArgs, source);
//     },
//     onHasTask(delegate, current, target, hasTaskState) {
//         delegate.hasTask(target, hasTaskState);
//         if (!hasTaskState.macroTask) {
//             console.log(new Date().getSeconds());
//         }
//     }
// });
// // myZone.run(main);
// // console.log(zone.myvar);

// function z() {
//     console.log(this);
//     this.aa = 'ok';
//     this.a = function () {
//         console.log(this);
//         var self = this;
//         return function () {
//             console.log(self);
//         };
//     };
// };

// // var zo = new z();
// // var re = zo.a();

// function add(a) {
//     return function (b) {
//         console.log(a, b);
//         return a + b;
//     };
// };

// var add5 = add(5);
// var r = add5(4);


// // var counter = 
// function counter() {

//     debugger

//     this.c = 0;

//     function changeValue(x) {
//         return c += x;
//     }
//     return {
//         increment: function () {
//             changeValue(1);
//         },
//         decrement: function () {
//             changeValue(-1);
//         },
//         getValue: function () {
//             return `value of counter : ${c}`;
//         }
//     };
// };

// var s = new Date().getSeconds();

// setTimeout(() => console.log('1000'), 1000);
// setTimeout(() => console.log('4'), 4);
// setTimeout(() => console.log('500'), 500);

// while (true) {
//     if (new Date().getSeconds() - s > 3) {
//         console.log('yep!');
//         break;
//     }
// }

function a() {
  var x = 1;
  return function () {
    console.log('hello', x);
    var y = 2;
    return function () {
      console.log('hello', 'x  = ', x, 'y = ', y);
    }
  }
}

function Obs(label) {
  this.label = label;
}

Obs.prototype.of = function (label) {
  this.label = label;
  return this;
}

Obs.prototype.pipe = function (...fns) {
  // console.log(...fns);
  let r;
  fns.forEach(fn => {
    console.log(fn);
    r = fn(this.label);
  })
  return r;
}

var myMap = function (fn) {
  return fn;
}

var myTap = function (fn) {
  return fn;
}

const obs = new Obs();

const r = obs
  .of('toto')
  .pipe(
    myTap(e => console.log('this is the tap operator : ' + e)),
    myMap(e => `hellllo -> ${e}`)
  );

console.log(r);


function bn() {
  return {
    allo() {
      return 'hello';
    }
  }
}
