// Import and export functions and variables allow you to export code from 
// one file and import it into another file

// Since I am running this JavaScript code with Node.js in VSCode, I need to
// include a 'package.json' file to enable ES modules (ES stands for ECMAScript, 
// which is the official standard for JavaScript), with the following 
// content to allow for import and export functionality:
//      {
//          "type": "module"
//      }



// Importing only the 'capitalizeString' function from the '919.1. import_and_export.js'
// file 
// import { capitalizeString } from "./919.1. import_and_export.js";
// const cap = capitalizeString("Hello!");
// console.log(cap);


// Importing the 'capitalizeString' function and 'bar' variable from the 
// '919.1. import_and_export.js' file 
// import { capitalizeString, foo } from "./919.1. import_and_export.js";
// const cap = capitalizeString("Hello!");
// console.log(cap);
// console.log(foo);


// Importing all exported functions and variables from the '919.1. import_and_export.js'
// file with the '*' operator

// Note that if you do this, you are actually storing all the exported functions and 
// variables from the '919.1. import_and_export.js' file into a plain object (dictionary),
// and naming the plain object (dictionary) 'myLibary'
import * as myLibary from "./919.1. import_and_export.js";

const cap = myLibary.capitalizeString("Hello!");
console.log(cap);
console.log(myLibary["foo"]);
console.log(myLibary.foo);
