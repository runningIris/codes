/**
 * 用于创建和初始化类中创建的一个对象的一种特殊方法
 * 一个类中只能有一个constructor方法
 * 如果不指定一个构造函数(constructor)方法，则使用一个默认的构造函数(constructor)
 * 在一个构造方法中，可以用super关键字来调用一个父类的构造方法
 *
 * class-like inheritance hierarchies using functions and prototypes
 *
 */


/**
 * demos
 *
 * creating a new class
 * extending an existing class
 * subclassing methods of a parent class 
 * defining static methods
 * subclassing built-ins
 *
 */

'use strict';
const Polygon = class {
	constructor(height, width) {
		this.name = 'Polygon';
		this.height = height;
		this.width = width;
	}

	sayName() {
		console.log(`Hi, I am a ${this.name}.`);
	}

	sayHistory() {
		console.log(`Polygon is deprived from the Greek polus (many) and gonia (angle).`);
	}
}

let p = new Polygon(300, 400);
// p.sayName();
// p.sayHistory();


class Square extends Polygon {
	constructor(length){
		super(length, length);
		this.length = length;
	}
	get area() {
		return this.height * this.width;
	}
	set area(value) {
		this.area = value;
	}
}

let s = new Square(10);
s.sayName();

console.log(`area: ${s.area}`);


class Rectangle extends Polygon {
	constructor(height, width){
		super(height, width);
		this.name = 'Rectangle';
	}

	sayName() {
		console.log(`Sup! My name is ${this.name}.`);
		super.sayHistory();
	}
}

let r = new Rectangle(10,20);

r.sayName();

console.log(r.width, r.height);


class Triple {
	static triple(n) {
		n = n || 1;
		return n * 3;
	}
}


class BiggerTriple extends Triple {
	static triple(n) {
		return super.triple(n) * super.triple(n);
	}
}

console.log(Triple.triple());
console.log(Triple.triple(5));
console.log(BiggerTriple.triple(5));

class MyDate extends Date {
	constructor() {
		super();
	}

	getFormattedDate() {
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sup', 'Oct', 'Nov', 'Dec'];
		return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
	}
}

const date = new MyDate();
console.log(date.getFormattedDate());

class ExtendedUint8Array extends Uint8Array {
	constructor() {
		super(10);
		this[0] = 255;
		this[1] = 0xFFA;
	}
}

const eua = new ExtendedUint8Array();
console.log(eua.byteLength);

class Audio {
	constructor(){
		this._lyrics = '';
	}

	get lyrics() {
		return this._lyrics;
	}

	set lyrics(str) {
		this._lyrics = str;
	}
}

var player = new Audio();
player.controls = true;
console.log(player.lyrics);
player.lyrics = 'Never gonna say goodbye.';
console.log(player.lyrics);



class Stack extends Array {
	constructor() {
		super();
	}
	top() {
		return this[this.length - 1];
	}
}

const stack = new Stack();

stack.push('world');
stack.push('hello');

console.log(stack.top());
console.log(stack.length);

