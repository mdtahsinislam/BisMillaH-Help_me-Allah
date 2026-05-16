interface Father {
    money(): void;
}

interface Mother {
    care(): void;
}

class Child implements Father, Mother {

    money() {
        console.log("Father's money");
    }

    care() {
        console.log("Mother's care");
    }
}