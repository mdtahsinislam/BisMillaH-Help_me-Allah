// ==============================================
// ABSTRACTION
// ==============================================

// abstract class তৈরি করা হয়েছে

abstract class Vehicle {

    // abstract method
    // body থাকবে না

    abstract startEngine(): void;

    // normal method
    stopEngine(): void {
        console.log("Engine Stopped");
    }
}

// Child class অবশ্যই abstract method implement করবে

class Car extends Vehicle {

    startEngine(): void {
        console.log("Car Engine Started");
    }
}

// object create

const myCar = new Car();

myCar.startEngine();
myCar.stopEngine();