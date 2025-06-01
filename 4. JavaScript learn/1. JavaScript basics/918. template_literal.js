// What is Template Literal?
// A Template Literal is simply string literals surrounded by double backticks (`).

// How is Template Literal used?
// Syntax:
//          `string text ${expression} string text`
// - It allows you to write multiple lines
// - It allows you to embed variables in the string via the '${}' syntax
const person = {
    name : "James",
    age : "20"
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);