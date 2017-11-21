'use strict';
const curry = (params) => (fn) => {
	fn(params);
}

const doubleMe = function(param) {
	return param * 2;
}

const MinusOne = function(param) {
	return param - 1;
}

console.log(curry(3)(doubleMe))
