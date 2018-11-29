const groupBy = (t, k) =>
  t.reduce((a, c) => {
    a[c[k]] = [...(a[c[k]] || []), c];
    return a;
  }, {});
