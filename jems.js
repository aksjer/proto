var o = { a: 1 };
var i = 0;
(function x() {
  i++;
  o = { a: 2 };
})();
console.log(o, i);

var arr = [1, 0, -5, 11, 4];
(function tri(arr) {
  for (let i = 1; i < arr.length; i++) {
    var cpt = i;
    while (cpt) {
      if (arr[cpt - 1] > arr[cpt]) {
        var temp = arr[cpt - 1];
        arr[cpt - 1] = arr[cpt];
        arr[cpt] = temp;
      } else {
        break;
      }
      cpt--;
    }
  }
  console.log(arr);
})(arr);
