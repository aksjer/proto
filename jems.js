var o = { a: 1 };
var i = 0;
(function x() {
  i++;
  o = { a: 2 };
})();
console.log(o, i);

var arr = [1, 0, -5, 11, 4];
function tri(arr) {
  const tab = arr.slice();
  for (let i = 1; i < tab.length; i++) {
    var cpt = i;
    while (cpt--) {
      if (tab[cpt] > tab[cpt + 1]) {
        var temp = tab[cpt];
        tab[cpt] = tab[cpt + 1];
        tab[cpt + 1] = temp;
      } else {
        break;
      }
    }
  }
  return tab;
}
