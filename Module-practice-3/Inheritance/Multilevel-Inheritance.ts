class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }
}

class BabyDog extends Dog {
    weep() {
        console.log("Weeping...");
    }
}