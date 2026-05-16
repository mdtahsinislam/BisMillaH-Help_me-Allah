// ==============================================
// CLASS AND OBJECT
// ==============================================

// class তৈরি করা হয়েছে

class Student {

    // properties / variables
    name: string;
    age: number;

    // constructor automatically object initialize করে
    constructor(name: string, age: number) {

        // this বর্তমান object কে নির্দেশ করে
        this.name = name;
        this.age = age;
    }

    // method / function
    displayInfo(): void {
        console.log("Student Name:", this.name);
        console.log("Student Age:", this.age);
    }
}

// object তৈরি করা হয়েছে

const student1 = new Student("Tahsin", 22);

// method call
student1.displayInfo();