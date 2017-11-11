/**
 * The species accessor property allows subclasses to over-ride the default constructor for objects.
 */

class MyArray extends Array {
	// Overwrites species to the parent Array constructor
	static get [Symbol.species]() {
		return Array;
	}
}

const a = new MyArray(1,2,3);
const mapped = a.map(x => x*x);

console.log(mapped);
console.log(a);

console.log(mapped instanceof MyArray);
console.log(mapped instanceof Array);
