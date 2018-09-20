let t;
let myZone = Zone.current.fork({
  name: 'myZone',
  onInvoke(delegate, current, target, task, applyThis, applyArgs, source) {
    t = new Date();
    return delegate.invoke(target, task, applyThis, applyArgs, source);
  },
  onHasTask(delegate, current, target, hasTaskState) {
    delegate.hasTask(target, hasTaskState);
    if (!hasTaskState.macroTask) {
      console.log(`${new Date() - t} ms`);
    }
  }
});
myZone.run(() => {
  setTimeout(() => console.log('z'), 3500);
  console.log('a');
  setTimeout(() => console.log('b'), 2000);
  console.log('c');
});
