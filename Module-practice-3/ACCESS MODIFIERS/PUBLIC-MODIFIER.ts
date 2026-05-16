// ==============================================
// PUBLIC MODIFIER
// ==============================================

class Student {

    // public property
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    // public method
    public showName(): void {
        console.log("Student Name:", this.name);
    }
}

// object create

const student1 = new Student("Tahsin");

// বাইরে থেকে access করা যাচ্ছে

console.log(student1.name);

student1.showName();