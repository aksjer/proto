const o = { a: 'a' };

const handler = {
  deleteProperty: function (target, key) {
    console.log(`delete property : ${key}`);
  }

};

const p = new Proxy(o, handler);
delete p.a;