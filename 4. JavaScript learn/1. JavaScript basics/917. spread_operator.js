// Spread Operator vs Rest Operator
// The spread operator looks exactly the same as the rest operator, both represented
// by 3 dots '...'.

// But the 3 dots '...', instead of being used at the parameter/argument of a 
// function, which makes it work as a rest operator, when used at other contexts,
// the 3 dots '...', instead works as a spread operator.


////////////////////////////////////////////////////////////////////////////


// The spread operator '...' allows an iterable, such as an array or string, to be expanded 
// in places where zero or more arguments (for function calls) or elements (for array 
// literals) are expected.

// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of 
// rest syntax. Spread syntax "expands" an array into its elements, while rest syntax
// collects multiple elements and "condenses" them into a single element.

// It can be used in many different ways, in functions, arrays plain object, constructors:
// 1. Spread in Function Calls
// a. Use: Pass elements of an array as separate arguments to a function.
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));           // Output: 6


// 2. Spread in Array Literals
// a. Use: Copy or merge arrays easily.
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged1 = [...arr1, ...arr2];  
console.log(merged1);                   // Output: [1, 2, 3, 4]

// b. Use: Copy an array (shallow copy).
const original = [10, 20];
const copy = [...original]; 
console.log(copy);                      // Output: [10, 20]

// c. Use: Conditionally add elements to an array.
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["mango"] : [])];
console.log(fruits);                    // Output: ["apple", "banana"]


// 3. Spread in Object Literals
// a. Use: Copy or merge objects.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged2 = { ...obj1, ...obj2 };
console.log(merged2);                   // Output: { a: 1, b: 2 }

// b. Use: Override values.
const user = { name: "John", age: 20 };
const updated = { ...user, age: 21 }; 
console.log(updated)                    // Output: { name: "John", age: 21 }

// c. Use: Conditionally add properties.
const isLoggedIn = false;
const profile = {
  name: "Alex",
  ...(isLoggedIn && { token: "abc123" }) // adds `token` only if logged in
}; 
console.log(profile)                    // Output: { name: "Alex" }


// 4. Use in new Constructor
// a. Use: Construct instances using spread in constructor arguments.
const dateFields = [2025, 0, 1];
const date = new Date(...dateFields);
console.log(date)                       // Output: 2024-12-31T16:00:00.000Z


// Source:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax (mdn web docs)