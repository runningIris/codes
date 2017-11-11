class Animal {
	constructor(name) {
		this.name = name;
	}
	
	speak() {
		console.log(`Hi there, this is ${this.name}!`);
	}
}

class Dog extends Animal {
	bark() {
		console.log(`${this.name} is barking... wang! wang! wang! `);
	}
	speak() {
		console.log(`${this.name} is speaking...How U doing?`);
	}
}

const Mammal = {
	breathe() {
		console.log(`${this.name} is breathing... in a very comfortable way... with its lungs...`);
	}
}

Object.setPrototypeOf(Dog.prototype, Mammal);


const mantou = new Dog('Mantou');
mantou.speak();
mantou.bark();
mantou.breathe();
