export class Dog {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

const dog1 = new Dog('dog1');
const dog2 = new Dog('dog2');
const dog3 = new Dog('dog3');

// @ts-expect-error
Dog.prototype.play = function () {
    console.log(`${this.name} is playing`);
}
// @ts-expect-error
dog1.play();

export class SuperDog extends Dog {
    constructor(name: string) {
        super(name);
    }

    fly() {
        console.log(`${this.name} is flying`);
    }
}

const dogg = new SuperDog('dogg');
dogg.bark();
dogg.fly();

const dog = {
    bark: function () {
        console.log(`barking`);
    }
}
const pet = Object.create(dog);
dog.bark()

console.log("Direct properties on pet1: ", Object.keys(pet)); // []
console.log("Properties on pet1's prototype: ", Object.keys(pet.__proto__)); // ["bark"]
