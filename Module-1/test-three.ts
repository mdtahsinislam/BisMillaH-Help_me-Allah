// Define Union Type
type StringOrNumber = string | number;


function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "String";
    } else {
         return "Number";
    }
}


//console.log(checkType("Hello"));


//console.log(checkType(42));
