function *foo(){
	var x = yield 3;
	var y = x.toUpperCase();
	yield y;
}

var it = foo();

it.next();

try{
	it.next('a');
} catch (err) {
	console.error('hhh', err);
}


// Delegating Generators
function *foo() {
	yield 3;
	yield 4;
	yield *h();
}

function *bar() {
	yield 1;
	yield 2;
	yield *foo();
	yield 5;
}

function *h() {
	yield 8;
	yield 9;
}

for(var v of bar()){
	console.log(v);
}


function *foo1() {
	var z = yield 3;
	var w = yield 4;
	console.log("z: " + z + ", w: " + w);
}

function *bar1() {
	var x = yield 1;
	var y = yield 2;

	yield *foo1();
	var v = yield 5;
	console.log({x, y, v})
}

var it = bar1();

/*
it.next();
it.next('x');
it.next('y');
it.next('z');
it.next('v');
it.next('w');
*/

// error handling in both directions across a yield* delegation
function *foo() {
	try {
		yield 2;
	} catch (err) {
		console.log('foo caught: ' + err);
	}

	yield;

	throw 'Oops!';
}

function *bar() {
	yield 1;
	try {
		yield *foo();
	} catch (err) {
		console.log('bar cought: ' + err);
	}
}

var it = bar();
it.next();
it.next();
it.throw('Uh oh!');
it.next();

