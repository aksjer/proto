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
