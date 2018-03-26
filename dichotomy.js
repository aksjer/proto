const arr = [];
let cpt;

function init() {
  arr.length = 0;
  for (let i = 0; i < 1000; i++) {
    arr.push(i);
  }
  cpt = 0;
}

function dichotomy(arr, n) {
  if (arr.length > 1) {
    cpt++;
    const l = parseInt(arr.length / 2);
    if (n < arr[l]) {
      dichotomy(arr.splice(0, l), n);
    } else if (n > arr[l]) {
      dichotomy(arr.splice(l, arr.length), n);
    } else {
      dichotomy(arr[l], n);
    }
  }
  return cpt;
}

function search(arr, n) {
  for (let i in arr) {
    cpt++;
    if (arr[i] === n) break;
  }
  return cpt;
}

const n = 999;
init();
console.log(dichotomy(arr, n));
init();
console.log(search(arr, n));
