// ==============================================
// INHERITANCE
// ==============================================

// Parent Class

class Person {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log("Hello,", this.name);
    }
}

// Child Class
// extends ব্যবহার করে inheritance করা হয়

class Teacher extends Person {

    subject: string;

    constructor(name: string, subject: string) {

        // parent constructor call
        super(name);

        this.subject = subject;
    }

    teach(): void {
        console.log(this.name, "teaches", this.subject);
    }
}

// object create

const teacher1 = new Teacher("Rahim", "Math");

// parent method
teacher1.greet();

// child method
teacher1.teach();