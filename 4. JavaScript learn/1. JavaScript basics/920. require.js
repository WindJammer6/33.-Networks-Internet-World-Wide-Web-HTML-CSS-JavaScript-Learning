// The 'require()' function allows you to export code (using 'module.exports') 
// from one file and import it into another file (using 'require()'), similar
// to the import and export functions as seen from the '919. import_and_export.js' 
// file

// However, in the earlier file, '919. import_and_export.js', in order to run
// the import and export functions, which can only be done in Node.js, I had to 
// include a 'package.json' file to enable ES modules (ES stands for ECMAScript, 
// which is the official standard for JavaScript), with the following content to 
// allow for import and export functionality:
//      {
//          "type": "module"
//      }

// But this 'package.json' file with the content "type": "module", conflicts with
// the use of 'require()' function since it is not part of the ES modules. Hence, 
// you need to remove this 'package.json' file in order to run this file which 
// uses the 'require()' function



// Importing all exported functions and variables from the '920.1. require.js'
// file with the 'require()' function

// Note that if you do this, you are actually storing all the exported functions and 
// variables from the '919.1. import_and_export.js' file into a plain object (dictionary),
// and naming the plain object (dictionary) 'myLibary'
const myLibrary = require('./920.1. require.js');

const cap = myLibrary.capitalizeString("Hello!");
console.log(cap);
console.log(myLibrary["foo"]);
console.log(myLibrary.foo);


// Source(s):
// - https://www.freecodecamp.org/news/how-to-use-the-javascript-require-function/ (freecodecamp)