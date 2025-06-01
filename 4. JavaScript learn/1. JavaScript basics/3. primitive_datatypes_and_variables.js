// Primitive Datatypes in JavaScript:
// There are 7 primitive datatypes in JavaScript:
// 1. undefined - A variable without a value, has the value undefined. 
// The type is also undefined.
let car;            // value is undefined, type is undefined
console.log(car)

// Any variable can be emptied, by setting the value to undefined. The 
// type will also be undefined.
car2 = "Blue car"
car2 = undefined;    // value is undefined, type is undefined
console.log(car)



// 2. null - The special null value does not belong to any of the default 
// data types. It forms a separate type of its own which contains only the 
// null value
let ages = null;
console.log(ages)



// 3. boolean - true and false
let x = 5;
let y = 5;
let z = 6;
console.log(x == y)       // Returns true
console.log(x == z)       // Returns false



// 4. string - you know, text strings, you can use single or double quotes
// With double quotes
let carName1 = "Volvo XC60";
console.log(carName1)
// With single quotes
let carName2 = 'Volvo XC60';
console.log(carName2)

// In JavaScript, a character is also a string. There is no separate type 
// for characters. A single character is also a string.
let carName3 = 'v';
console.log(carName3)



// 5. symbol - Symbols, introduced in ES6, are unique and immutable 
// primitive values used as identifiers for object properties. They help 
// create unique keys in objects, preventing conflicts with other properties.
// (Takes only 1 argument)
let s1 = Symbol("abc");
let s2 = Symbol("abc");
console.log(s1 === s2);         // Return false



// 6. number - All JavaScript numbers are stored as decimal numbers 
// (floating point). Numbers can be written with, or without decimals
// With decimals
let x1 = 34.00;
console.log(x1)
// Without decimals
let x2 = 34;
console.log(x2)



// 7. bigInt - BigInt is a built-in object that provides a way to 
// represent whole numbers greater than 253. The largest number that 
// JavaScript can reliably represent with the Number primitive is 253, 
// which is represented by the 'MAX_SAFE_INTEGER' constant.

// Lets say you have a very large number, like "342534524124423"
// You cannot define it as a variable like this, because it is too large, 
// and it will cause a floating point error.
//      let large_number = 3245465634524546

// You need to use the BigInt datatype, like so, in order to prevent this
// error. Ensure you represent the large number in a string, instead of a number
//      NOT let b = BigInt(3245465634524546);
let b = BigInt("3245465634524546");
console.log(b);     // 3245465634524546n (The 'n' at the end means it's a BigInt datatype)

// (Additional info: BigInt datatype can only prevent floating point error for whole 
//  numbers. It doesnt work for decimal numbers.
//  E.g. 'let b = BigInt("3245465634524546.12");' wont work)

 

// Source: https://www.w3schools.com/js/js_datatypes.asp (GeekforGeeks)


// /////////////////////////////////////////////////////////////////////////////////////


// There are 3 ways to declare a variable in JavaScript:
// Unlike Java (datatypes are static), and similar to Python (datatypes are dynamic), you no need to declare the datatype the variable will be storing
// you can freely change the datatype the variable will be storing (Dynamic)

// 1. Using 'var' keyword (general-purpose) - Declares variables with function or global scope and 
// allows re-declaration and updates within the same scope.
var myName = "Mosh"
console.log(myName)
myName = "No longer Mosh"
console.log(myName)

if (true) {
    var age = 30; 
    console.log(age); 
}
console.log(age)



// 2. Using 'let' keyword (best used in practice, since it is the most secure) - Declares variables 
// with block scope, allowing updates but not re-declaration within the same block. A variable declared 
// by the 'let' keyword can technically be used in the global scope if you declared the variable with the 
// the 'let' keyword globally
// Declaring with the 'let' keyword globally
let myName2 = "Mosh"
console.log(myName2)
myName2 = "No longer Mosh"
console.log(myName2)

// If you do this, you will get an error since you are trying to use the variable declared
// with the 'let' keyword in the block scope (e.g. in the if statement) in the global scope
if (true) {
    // Declaring with the 'let' keyword locally/in a block scope
    let age2 = 30; 
    console.log(age2); 
}
console.log(age2)



// 3. Using 'const' keyword - Declares block-scoped variables that cannot be reassigned 
// after their initial assignment.
const myName3 = "Mosh"
console.log(myName3)

// If you do this, you will get an error since you are trying to reassign a variable declared
// with the 'const' keyword
myName3 = "No longer Mosh"
console.log(myName3)