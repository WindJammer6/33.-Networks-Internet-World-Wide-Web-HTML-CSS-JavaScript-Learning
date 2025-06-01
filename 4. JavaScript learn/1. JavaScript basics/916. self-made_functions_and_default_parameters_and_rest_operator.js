// A default parameter allows you to specify a value that a function 
// parameter/argument should take if no value is passed (i.e., it's undefined).

// Example of default parameters in use
function increment(number1, number2=1) {
    return number1 + number2;
}

console.log(increment(5, 2));
console.log(increment(5));



// The rest operator lets you take it any number of parameters/arguments
// into a function

// Example of rest operator in use, represented by the 3 dots '...' in front of the
// 'args' argument/parameter:


// Explanation of this 'sum' function:
// - Because of the rest operator '...', the 'args' argument/parameter is now holding
//   an array of values of all the parameters/arguments being passed

// - The '.reduce()' JavaScript function is used to process an array and reduce it to a 
//   single value, by repeatedly applying a function to each element and an "accumulator".
//   Basic syntax:
//                array.reduce((accumulator, currentValue) => {
//                  return updatedAccumulator;
//                }, initialValue);
//   where,
//   -> accumulator: stores the result of previous operations
//   -> currentValue: the current item in the array
//   -> initialValue: the value you start with (optional but highly recommended)

// - '(a,b) => a + b' - refers to an anonymous function created with as an arrow function 
//   that adds 2 values
//   (i.e. It is the same thing as:
//      function add(a, b) {
//        return a + b;
//      }
//   )

// - '0' - refers to the initial value (starting point) for the reduction
function sum(...args) {
    return args.reduce((a,b) => a + b, 0);
}

console.log(sum(5,10,15));