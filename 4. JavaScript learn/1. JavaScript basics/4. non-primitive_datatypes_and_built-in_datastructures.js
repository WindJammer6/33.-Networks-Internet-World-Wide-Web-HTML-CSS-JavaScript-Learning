// In JavaScript, anything that is not a primitive datatype (i.e. a non-primitive datatype),
// is called an Object.

// This essentially means stuffs like these, including built-in data structures, are all Objects in JavaScript:
// Object (general category)
// │
// ├── Plain Object (built-in data structure) →  { key : value } (basically the same as Python's Dictionary, 
//                                                                there's a weird name conflict idk why)
// ├── Array (built-in data structure)        →  [1, 2, 3] (basically the same as Python's List)
// ├── Function                               →  function() {}
// ├── Date                                   →  new Date()
// ├── Map                                    →  new Map()
// ├── Set                                    →  new Set()
// ├── Promise                                →  new Promise()
// ├── etc.


// 1. Plain Object (Dictionary) (built-in data structure)
let person = {
  name: "Alice",
  age: 30,
  city: "Tokyo"
};

// Access values
console.log(person)
console.log(person.name);         // "Alice"
console.log(person["city"]);      // "Tokyo"



// 2. Array (ArrayList) (built-in data structure)
let fruits_array = ["apple", "banana", "cherry"];

// Access elements
console.log(fruits_array[0]);       // "apple"
console.log(fruits_array.length);   // 3

// Add new element
fruits_array.push("dragonfruit");

console.log(fruits_array)



// 3. Functions - a block of reusable code designed to perform a specific task when called.
// Defining a function to greet a user
function greet(name) { 
    return "Hello, " + name + "!"; 
}

// Calling the function
console.log(greet("Ajay"));     // Returns Hello, Ajay!



// 4. Date - used to work with dates and times, allowing for date creation, 
// manipulation, and formatting.
// Creating a new Date object for the current date and time
let currentDate = new Date();

// Displaying the current date and time
console.log(currentDate);       // Returns something like: 2025-03-08T06:23:33.202Z



// 5. Map - A Map holds key-value pairs where the keys can be any datatype. A Map remembers 
// the original insertion order of the keys.

// Wait, a Map sounds very similar to Plain Object (Dictionary)... so whats the difference?
// | Feature         | `Object`                    | `Map`                                |
// | --------------- | --------------------------- | ------------------------------------ |
// | Key types       | Only strings/symbols        | Any type (including objects) ✅     |
// | Key order       | Not always guaranteed       | Always insertion order ✅           |
// | Performance     | Slower for large key sets   | Faster for frequent updates ✅      |
// | Size            | No built-in `.size`         | `.size` property ✅                 |
// | Iteration       | `for...in`, `Object.keys()` | `for...of`, `.forEach()` ✅         |
// Create a Map
const fruits_map = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits_map)

// You can add elements to a Map with the set() method:
fruits_map.set("apples", 500);
fruits_map.set("bananas", 300);
fruits_map.set("oranges", 200);
console.log(fruits_map)

// The set() method can also be used to change existing Map values:
fruits_map.set("apples", 200);
console.log(fruits_map)

// The get() method gets the value of a key in a Map:
console.log(fruits_map.get("apples"));    // Returns 200



// 6. Set - a collection of unique values. Each value can only occur once in a Set. The values 
// can be of any type, primitive values or objects. (Similar to Python's Sets, with some minor
// differences)
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters)



// 7. Promise - Promises make handling asynchronous operations like API calls, file loading, or time 
// delays easier. Think of a Promise as a placeholder for a value that will be available in the future. 

// It can be in one of three states:
// - Pending: The task is in the initial state.
// - Fulfilled: The task was completed successfully, and the result is available.
// - Rejected: The task failed, and an error is provided.

// (Note: Promise is a slightly more complicated type of built-in Object. I will be convering what this does
// in another file of its own (see '921. callback_and_callback_hell_and_promises_and_async_await.js' file))