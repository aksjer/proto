const tab1 = [];
const tab2 = {};

const lgt = 7000000

for (var i = 1; i < lgt + 1; i++) {
  tab1.push({ id: i, name: 'name' + i });
  tab2[i] = { id: i, name: 'name' + i };
}

function time(func) {
  const t = Date.now();
  console.log(func());
  console.log(Date.now() - t + 'ms');
}

const f1 = () => tab1.find(e => e.name === 'name' + lgt);
const f2 = () => tab2[lgt];

time(f1);
time(f2);