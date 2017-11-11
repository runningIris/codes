"use strict";
/**
 * 本篇代码主要探讨把class的方法指给一个变量，
 * 并在全局环境下执行时，this的指向
 *
 * 以及严格模式下，this默认指向的不是全局模式，而是undefined
 */



class Animal {
	speak(){
		return this;
	}
	static eat(){
		return this;
	}
}
let goose = new Animal();
console.log(goose.speak());
let speak = goose.speak;
console.log(speak());

console.log('---');
console.log(Animal.eat());
let eat = Animal.eat.bind({a:1});
console.log(eat());
// class 内的方法，无论有没有设置严格模式，都是按照严格模式来执行的


console.log('----------------');
function Plant(name) { this.name = name }
Plant.prototype.grow = function(){
	return this;
}
Plant.flowering = function(){
	return this;
}

let tree = new Plant('Nepolon');
console.log(tree.grow());


let grow = tree.grow;
console.log(grow());
// 严格模式下，grow()返回的是undefined
// 非严格模式下，grow()返回的是全局对象

