(function () {

  // var now = new Date().getTime();
  // var fn = () => console.log('fn');
  // setTimeout(fn);
  // while (true) {
  //   if (new Date().getTime() - now > 3000) break;
  // }
  // console.log('end');

  a();

  function a() {
    return 'a';
  }

  function b() {
    a();
  }



  b();


  c = {
    age: 666,
    sayHi: function () {
      console.log(this);
      return 'hi';
    }
  }

  let r;
  r = c.sayHi();
  let f = c.sayHi.bind(c);


  r = f();

  debugger
})();
