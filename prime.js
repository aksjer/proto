function isPrimeNumber(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true;
}

function primeNumbers(n) {
  const r = [2];
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    let j = 1;
    while (++j < i) {
      if (i % j === 0) break;
      else if (j === i - 1) r.push(i);
    }
  }
  return r;
}

const n = 99991;

console.log(isPrimeNumber(n));
console.log(primeNumbers(n));
