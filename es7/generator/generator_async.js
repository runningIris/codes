/*
function request(url) {
	makeAjaxCall(url, function(response) {
		it.next(response);
	});
}

function *main() {
	
	var result1 = yield request('http://someurl.1');
	var data = result1;
	
	var result2 = yield request('http://someurl.2');
	var resp = result2;
	
	console.log({data, resp});
}

function makeAjaxCall(url, callback){
	var flag = url.slice(-1);
	setTimeout(function(){	
		callback('flag: ' + flag);
	}, 1000);
}


var it = main();
it.next();
*/


function sleep(ms) {
	setTimeout(function(){
		it.next();
	}, ms)
}

function *foo() {
	sleep(3000);
	console.log('initialize');
	yield;
	console.log('yield 1');
	sleep(4000);
	yield;
	console.log('yield 2');
}

var it = foo();
it.next();








function request(url) {
		return new Promise((resolve, reject) => {
				makeAjaxCall(url, resolve);
		})
}


// run (async) a generator to completion
// Note: simplified approach: no error handling here

function runGenerator(g) {
		var it = g();
		var ret;
		
		// asynchronously iterate over generator
		(function iterate(val) {
				ret = it.next(val);

				if(!ret.done) {
						if('then' in ret.value){
								ret.value.then( iterate );
						} else {
						// immediate value: just send right back in
								setTimeout(function(){
										iterate(ret.value);
								}, 0);
						}
				}
		})();
}



runGenerator(function *main(){
		var result1 = yield request('http://example.com/3');
		var result2 = yield request('http://example.com/4');
		console.log({result1, result2});
});


async function main () {
		var result1 = await request('http://example.com/5');
		var result2 = await request('http://example.com/6');
		console.log({result1, result2})
}

main();
