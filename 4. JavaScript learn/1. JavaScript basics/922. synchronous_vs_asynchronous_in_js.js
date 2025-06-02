// What is Synchronous and Asynchronous in JavaScript?
// By default, JavaScript has always been synchronous in its behaviour. So how does it 
// pull off asynchronous behaviour? Wait, what is synchronous and asynchronous in the
// first place?


// In synchronous programming, operations are performed one after the other, in sequence.
// So, basically each line of code waits for the previous one to finish before proceeding 
// to the next. This means that the program executes in a predictable, linear order, with 
// each task being completed before the next one starts. It is blocking in nature as JavaScript
// needs to wait for a line of code to finish being processed before moving to process the
// next line of code.
// Example of Synchronous programming:
console.log("Hi");
console.log("Geek");
console.log("How are you?");

// Gives the output of:
// Hi
// Geek
// How are you?



// Asynchronous programming allows multiple tasks to run independently of each other. In 
// asynchronous code, a task can be initiated, and while waiting for it to complete, other 
// tasks can proceed. It is non-blocking in nature, and helps improve performance and 
// responsiveness, especially in web applications.
// Example of Asynchronous programming:
console.log("Hi");

// The 'setTimeout()' JavaScript function calls a function after a number of milliseconds.
// 1 second = 1000 milliseconds.
// Basic Syntax:
//              myTimeout = setTimeout(function, milliseconds);
setTimeout(() => {
    console.log("Geek");
}, 2000);

console.log("End");

// Gives the output of:
// Hi
// End
// Geek




// Source(s):
// - https://www.geeksforgeeks.org/synchronous-and-asynchronous-in-javascript/ (GeekforGeeks)
// - https://www.w3schools.com/jsref/met_win_settimeout.asp (GeekforGeeks)
// - https://medium.com/@SimranBhalode/is-javascript-synchronous-or-asynchronous-8b04738c55f5 (Medium)

