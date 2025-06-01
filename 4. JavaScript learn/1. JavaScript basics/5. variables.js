// There are 3 ways to declare a variable in JavaScript:
// Unlike Java (datatypes are static), and similar to Python (datatypes are dynamic), you no need 
// to declare the datatype the variable will be storing you can freely change the datatype the 
// variable will be storing (Dynamic).

// But like Java and unlike Python, the naming convention of variables is where the first word's 
// first letter is lowercase, while subsequent words' first letter will be uppercase.


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