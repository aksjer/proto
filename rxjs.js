const observer = {
  next: v => console.log(`log : ${v}`),
  error: err => console.log(`error : ${err}`),
  complete: () => console.log('complete')
};

// const sub = new Rx.Subject();
const sub = new Rx.BehaviorSubject();
// const sub = new Rx.ReplaySubject(2);
// const sub = new Rx.AsyncSubject();

// sub.next('hello');
// sub.next('my');
// sub.next('friend');

// sub.subscribe(observer);

sub.next('buddy');

// sub.complete();


// const source = Rx.Observable.of('Hello', 'Goodbye');
// const example = source.concatMap(val => Rx.Observable.of(`${val} World!`));
// const subscribe = example
//   .subscribe(val => console.log('Example One:', val));

// const concatMapSub = Rx.Observable.of(2000, 1000)
//   .switchMap(v => {
//     console.log(`this is v : ${v}`);
//     return Rx.Observable.of(v).delay(v);
//   })
//   .subscribe(v => console.log('concatMap:', v))

// const mergeMapSub = Rx.Observable.of(2000, 1000)
//   .mergeMap(v => Rx.Observable.of(v).delay(v))
//   .subscribe(v => console.log('mergeMap:', v))

// const source = sub.concat(Rx.Observable.of('end'));
const source = sub.merge(Rx.Observable.of('end').delay(5000));
source.subscribe(observer);