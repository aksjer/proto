const o = {};

Object.defineProperty(o, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static"
});

Object.defineProperty(o, "tab", {
  enumerable: true,
  configurable: false,
  writable: false,
  value: 35
});

o.key = 15;

for(let idx of Object.keys(o)){
  console.log(o[idx]);
}
