// ==============================================
// POLYMORPHISM
// ==============================================

// Parent Class

class Animal {

    makeSound(): void {
        console.log("Animal makes sound");
    }
}

// Child Class 1

class Dog extends Animal {

    // method overriding
    makeSound(): void {
        console.log("Dog barks");
    }
}

// Child Class 2

class Cat extends Animal {

    // method overriding
    makeSound(): void {
        console.log("Cat meows");
    }
}

// object create

const animal1 = new Dog();
const animal2 = new Cat();

// same method different behavior

animal1.makeSound();
animal2.makeSound();