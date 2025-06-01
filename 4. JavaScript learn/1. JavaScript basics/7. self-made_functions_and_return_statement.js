// Examples of how to define a function in JavaScript

// Note that it is not convention to have a semicolon ';' at the
// end of a function!


// Function without parameters/arguments
function greet1() {
    console.log('Hello World');
}


// Function with 1 parameter/argument
function greet2(name) {
    console.log('Hello ' + name);
}


// Function with more than 1 parameters/arguments
function greet3(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}


// Function with a return statement
function square(number) {
    return number * number;
}


greet1();
greet2('John');
greet3('John', 'Smith');
console.log(square(2))
