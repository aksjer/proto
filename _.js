const isEven = n => n % 2 === 0;

const isPrime = n => {
  if (n < 1) {
    return false;
  }
  if (n === 1 || n === 2) {
    return true;
  }
  if (isEven(n)) {
    return false;
  }
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const countOfWord = (s, w) =>
  s.split(' ').reduce((acc, cur) => (cur === w ? acc + 1 : acc), 0);

const sum = a => (a.length ? a[0] + sum(a.slice(1)) : 0);

const embedded = (a, b) => {
  if (a === '{' && b === '}') {
    return true;
  }
  if (a === '(' && b === ')') {
    return true;
  }
  if (a === '[' && b === ']') {
    return true;
  }
  return false;
};

const isOpenBracket = s => ['{', '[', '('].includes(s);

const isValid = s => {
  if (s.length % 2 !== 0) {
    return false;
  }
  const a = [];
  for (let i = 0; i < s.length; i++) {
    if (isOpenBracket(s[i])) {
      a.push(s[i]);
      continue;
    }
    if (!embedded(a.pop(), s[i])) {
      return false;
    }
  }
  return true;
};

const fibonacci = n => (n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : 1);

const flat = a =>
  a.reduce((a, i) => (Array.isArray(i) ? [...a, ...flat(i)] : [...a, i]), []);
(function() {
  // console.log(isEven(44));
  // console.log(isPrime(499));
  // console.log(countOfWord('i am fine, i am Nejib, i am 28 years , bonus : am', 'i'));
  // console.log(sum([1, 2, 50]));
  // console.log(isValid('({}'));
  // console.log(isValid('({)}'));
  // console.log(isValid('(){}'));
  // console.log(isValid('{()}'));
  // console.log(isValid(')[({()})()]'));
  // console.log(isValid('[({()})()]'));
  console.log(fibonacci(30));
})();

// *********
String.prototype.replaceAt = function(index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

var s = 'abc';
const tab = [];
function permute(s, l, r) {
  if (l == r) tab.push(s);
  else {
    for (let i = l; i <= r; i++) {
      s = swap(s, l, i);
      permute(s, l + 1, r);
    }
  }
}

function swap(s, i, j) {
  const t = s[j];
  s = s.replaceAt(j, s[i]);
  return s.replaceAt(i, t);
}
permute(s, 0, s.length - 1);
console.log(tab);
// *********
