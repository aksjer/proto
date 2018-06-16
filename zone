let zone = Zone.current;
let main = () => {
    console.log('a');
    setTimeout(() => console.log('b'), 2000);
    console.log('c');
};

let myZone = zone.fork({
    name: 'myZone',
    onInvoke(delegate, current, target, task, applyThis, applyArgs, source) {
        console.log(new Date().getSeconds());
        return delegate.invoke(target, task, applyThis, applyArgs, source);
    },
    onHasTask(delegate, current, target, hasTaskState) {
        delegate.hasTask(target, hasTaskState);
        if (!hasTaskState.macroTask) {
            console.log(new Date().getSeconds());
        }
    }
});
myZone.run(main);
// console.log(zone.myvar);
