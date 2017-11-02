function pause(ms) {
	return new Promise(resolve => setTimeout(()=>{
		resolve();
		it.next();
	}, ms));
}

function *foo() {
	console.log('begin');
	yield pause(1000);
	console.log(1);
	yield pause(1000);
	console.log(2);
}

var it = foo();
it.next();
