let fn1 = (a,callback) => setTimeout(() => callback(a + '_fn1'), 1000);
let fn2 = (a,callback) => setTimeout(() => callback(a + '_fn2'), 2000);
let fn3 = (a,callback) => setTimeout(() => callback(a + '_fn3'), 3000);

fn1('toto', function(r_fn1){
	console.log('r_fn1 : ', r_fn1);
	fn2(r_fn1, function(r_fn2){
		console.log('r_fn2 : ', r_fn2);
		fn3(r_fn2, function(r_fn3){
			console.log('r_fn3 : ', r_fn3);		
        });
    });
});

let f1 = a => new Promise(r => setTimeout(() => r(a + '_f1'), 1000));
let f2 = a => new Promise(r => setTimeout(() => r(a + '_f2'), 2000));
let f3 = a => new Promise(r => setTimeout(() => r(a + '_f3'), 3000));

f1('toto')
  .then(r_f1 => {
    console.log(r_f1);
    return f2(r_f1);
  })
  .then(r_f2 => {
    console.log(r_f2);
    return f3(r_f2);
   })
  .then(r_f3 => {
    console.log(r_f3);
  });
  
f1('toto')
  .then(r_f1 => f2(r_f1))
  .then(r_f2 => f3(r_f2))
  .then(r_f3 => console.log(r_f3));  
