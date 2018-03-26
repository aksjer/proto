function triABulles(tab) {
  for (i = tab.length - 1; i > 0; i--) {
    let j = -1;
    while (++j < i) {
      if (tab[j + 1] < tab[j]) {
        const t = tab[j];
        tab[j] = tab[j + 1];
        tab[j + 1] = t;
      }
    }
  }
}

function triABullesOptimise(tab) {
  for (i = tab.length - 1; i > 0; i--) {
    let sorted = true;
    let j = -1;
    while (++j < i) {
      if (tab[j + 1] < tab[j]) {
        const t = tab[j];
        tab[j] = tab[j + 1];
        tab[j + 1] = t;
        sorted = false;
      }
    }
    if (sorted) return;
  }
}
// const a = [3, 4, 0, 5, 1];
const a = [1, 2, 3, 4, 5];
debugger
triABulles(a);
// triABullesOptimise(a);
console.log(a);

function pairImpair(arr) {
  for (let i = 1; i < arr.length; i = i + 2) {
    for (let j = 1; j < arr.length; j = j + 2) {
      if (arr[j] > arr[j + 1]) {
        const t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
    for (let j = 0; j < arr.length; j = j + 2) {
      if (arr[j] > arr[j + 1]) {
        const t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }
}

const arr = [3, 4, 0, 5, 1, -5];
pairImpair(arr);
console.log(arr);
