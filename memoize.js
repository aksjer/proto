const expo = n => n ? n * expo(n - 1) : 1;

const fibonacci = n => n < 1 ? 0
  : n <= 2 ? 1
    : fibonacci(n - 1) + fibonacci(n - 2);

const memoize = function (f) {
  this.o = {};
  this.exec = arg => this.o[arg] ? this.o[arg] : this.o[arg] = f(arg);
}

const fib = new memoize(fibonacci);

const handler = {
  get: function (target, key) {
    if (key === 'exec') {
      const t = Date.now();
      const res = target.exec(target['n']);
      console.log(Date.now() - t + 'ms');
      return res;
    }
    return target[key];
  }
};

const p = new Proxy(fib, handler);
p.n = 43;