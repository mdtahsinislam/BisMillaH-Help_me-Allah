// ==============================================
// PROTECTED MODIFIER
// ==============================================

class Person {

    // protected property
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Child class

class Teacher extends Person {

    showTeacher(): void {

        // protected property child class এ access করা যায়
        console.log("Teacher Name:", this.name);
    }
}

const teacher1 = new Teacher("Rahim");

teacher1.showTeacher();


// ❌ বাইরে থেকে access করা যাবে না
// console.log(teacher1.name);