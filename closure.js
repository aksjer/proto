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
