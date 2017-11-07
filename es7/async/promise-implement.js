var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;


/**
 * 记住调用promise的方式是
 * var a = new Promise(function(){
 * 	resolve('success');
 * 	reject('fail');
 * });
 * 
 * Promise 函数里的fn其实包含两个函数作为参数，
 * 一个用做处理fn函数调用成功的结果，
 * 一个用来处理fn函数调用失败的结果。
 *
 * a.then(function(successResult){
 *	console.log(successResult);
 * }, function(errorResult){
 * 	console.log(errorResult);
 * });
 *
 */

function Promise(fn) {

	// 当运行new Promise(fn)的时候
	// 初始化这个promise的state为PENDING未完成, value为null
	var state = PENDING;
	var value = null;
	var handlers = [];
	// fn函数顺利执行时，把state的值改为FULFILLED，value改为获得的结果
	function fulfill(result) {
		state = FULFILLED;
		value = result;
		handlers.forEach(handle);
		handlers = null;
	}
	// fn函数执行出错时，把state的值改为REJECTED，value改为捕获到的错误
	function reject(error) {
		state = REJECTED;
		value = error;
		handlers.forEach(handle);
		handlers = null;
	}
	// step 4 这里接收到fn运行完返回的值，并根据这个值，对this对象进行操作
	function resolve(result){
		try {
			var then = getThen(result);
			/**
			 * 如果result里有then方法，则先执行then，像之前一样，通过doResolve来执行
			 */
			if(then) {
				doResolve(then.bind(result), resolve, reject);
				return;
			}
			/**
			 * 等所有的then都执行完毕之后
			 * 执行fulfill函数，表示这个promise对象已经完成了
			 * 保存state为FULFILLED，
			 * 保存value值为result
			 * value由.then(resolve, reject)中的resolve函数接收
			 */
			fulfill(result);
		} catch (e) {
			/**
			 * 执行出错，跑出错误e
			 * 在这里执行reject函数，表示这个promise对象被拒绝，执行失败
			 * 保存state为REJECTED，
			 * 保存value为抛出的错误
			 * value由.then(resolve, reject)中的reject函数接收
			 */
			reject(e);
		}
		/**
		 * 执行到此，new Promise(fn) 已经执行完毕了
		 * value的值要么是error，要么是函数顺利执行返回的result
		 * state要么是REJECTED, 要么是FULFILLED
		 * 这俩值保存在new出来的对象里，等待下一步的调用 => 请看 this.then(onFulfilled, onRejected)
		 */
	}

	function handle(handler) {
		if(state === PENDING) {
			handlers.push(handler);
		} else {
			if (state === FULFILLED && typeof handler.onFulfilled === 'function') {
				handler.onFulfilled(value);
			}
			if (state === REJECTED && typeof handler.onRejected === 'function') {
				handler.onRejected(value);
			}
		}
	}

	this.done = function(onFulfilled, onRejected) {
		setTimeout(function() {
			handle({
				onFulfilled: onFulfilled,
				onRejected: onRejected
			});
		}, 0);
	}

	/**
	 * step 5
	 * 
	 * new Promise(fn) 执行完成变成fulfilled或者rejected状态后
	 * 通过.then(onFulfilled, onRejected)来处理返回的result或者error
	 *
	 */
	this.then = function(onFulfilled, onRejected) {
		var self = this;
		return new Promise(function (resolve, reject){
			return selft.done(function(result){
				if(typeof onFulfilled === 'function') {
					try {
						return resolve(onFulfilled(result));
					} catch (ex) {
						return reject(ex);
					}
				} else {
					return resolve(result);
				}
			}, function (error) {
				if(typeof onRejected === 'function') {
					try {
						return resolve(onRejected(error));
					} catch (ex) {
						return reject(ex);
					}
				} else {
					return reject(error);
				}
			});
		});
	}
	

	/**
	 * new Promise(fn) 后，执行doResolve
	 * doResolve会尝试执行fn，
	 * 假如成功，就执行上面的resolve函数
	 * 假如失败，就执行上面的reject函数
	 */

	// step1
	doResolve(fn, resolve, reject);
}

/**
 * 以下是两个辅助函数
 */


/**
 * getThen函数：
 * 判断返回值是不是一个包含then方法的对象，如果是，则返回需要then的函数
 */
function getThen(value) {
	var t = typeof value;
	if(value && (t === 'object')){
		var then = value.then;
		if(typeof then === 'function') {
			return then;
		}
	}
	return null;
}

/**
 * doResolve函数处理fn
 */

function doResolve(fn, onFulfilled, onRejected) {
	// step 2
	var done = false;
	try {
		fn(function(value){
			// 该匿名函数是fn参数里的resolve参数
			if(done) return;
			done = true;
			// step 3
			onFulfilled(value);
			/**
			 * 这里的onFulfilled函数其实是Promise函数里的resolve方法
			 * 当成功执行完fn函数时，就把返回的值传给Promise函数中的resolve方法
			 */
		}, function(reason){
			if (done) return;
			done = true;
			onRejected(reason);
		})
	} catch (ex) {
		if (done) return;
		done = true;
		onRejected(ex);
	}
}
