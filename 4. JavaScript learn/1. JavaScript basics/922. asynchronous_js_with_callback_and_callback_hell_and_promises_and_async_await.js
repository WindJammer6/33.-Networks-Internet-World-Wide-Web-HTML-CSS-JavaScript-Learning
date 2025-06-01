// You can do asynchronous programming in JavaScript with:
// - Callbacks
// - Promises
// - Async/Await


////////////////////////////////////////////////////////////////////////////////


// What is a Callback in JavaScript?
// In JavaScript, callbacks are functions that are passed as an argument/parameter
// of another function and are executed after the completion of a certain task

// For example:
// Note that we are using the arrow function '=>' to create an anonymous function,
// though a function nonetheless:
//      () => {
//          console.log("Waited 1 second")
//      }
// which simply just prints out the string "Waited 1 second"
setTimeout(() => {
    console.log("Waited 1 second")
}, 1000)




// What is a Callback Hell (Pyramid of Doom) in JavaScript?
// But a problem with callbacks is that if there are multiple asynchronous
// operations that depend on each other, callbacks become deeply nested, 
// making the code hard to read and maintain (even though it works).
// For example:
setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1');
        }, 1000);
    }, 1000);
}, 1000);


////////////////////////////////////////////////////////////////////////////////


// What are Promises in JavaScript?
// Promises is a non-primitive datatype/object that represents something that will be available 
// in the future. You can imagine it as the evolution of the idea of callbacks, and it provides
// an alternative to doing callbacks (callbacks and promises both do the same thing 
// functionality-wise), tackling the callback hell problem.

// Creating a Promise Object, which takes in 1 parameter/argument of a function/callback (commonly
// its created as an anonymous function/callback using the arrow function '=>'), which in turn takes in 2
// parameters/arguments, both are also functions/callbacks, one named 'resolve' function and another
// named 'reject' function by convention.

// In the anonymous function, you usually would want to do an operation, and then checks if it is
// successful or it failed. 
// - If it is successful, you run the 'resolve' function/callback
// - If it failed, you run the 'reject' function/callback
const myPromise = new Promise((resolve, reject) => {
    // Operation to be done (It generates a random integer that is either 0 or 1 — basically 
    // simulating a coin flip.)
    const coinFlip = Math.floor(Math.random() * 2);

    // Checking if that operation is successful or failed
    if (coinFlip == 0){
        // If it is successful, you run the 'resolve' function/callback
        resolve('Coin is HEADS');
    } else {
        // If it failed, you run the 'reject' function/callback
        reject('Coin is TAILS');
    }
});


// There is an additional step when using Promises, which is to implement the '.then()' function and
// '.catch()' function, both of which in turns takes an anonymous function/callback

// The '.then()' function handles what happens in the event of a success, while the '.catch()' function
// handles what happens in the event of a failure. You cannot just do the '.then()' function, you will
// get this error:
//          triggerUncaughtException(err, true /* fromPromise */);
//                      ^
// myPromise
//     .then(() => console.log('Success'));


myPromise
    .then((successMessage) => console.log('Success: ', successMessage))
    .catch((errorMessage) => console.error('Error caught: ', errorMessage));


// Note that you can also do a chain of multiple '.then()' function/callbacks, since each '.then()' 
// function/callbacks returns a new promise, so chaining '.then()' function/callbacks means:
// - The output of one '.then()' function/callbacks is passed to the next.
// - Each '.then()' function/callbacks waits for the previous one to complete.
// - You can perform sequential steps or transformations.
// myPromise
//     .then((message) => {
//         console.log('Step 1:', message); // Coin is HEADS
//         return 'Proceeding to step 2';
//     })
//     .then((nextMessage) => {
//         console.log('Step 2:', nextMessage); // Proceeding to step 2
//     })
//     .catch((errorMessage) => console.error('Error caught: ', errorMessage));




// So how does Promises solve the callback hell problem?
// Lets try to implement our callback hell problem code from the above section, but using Promises 
// instead, which does the exact same thing, but the code structure looks much neater
const myPromiseDelay = new Promise((resolve, reject) => {
    // We define the delay function using 'setTimeout()' function wrapped in an internal Promise
    function delay(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    // Simulate the countdown
    delay(1000)
        .then(() => {
            console.log('3');
            return delay(1000);
        })
        .then(() => {
            console.log('2');
            return delay(1000);
        })
        .then(() => {
            console.log('1');
            resolve('Countdown complete!');
        })
        .catch((err) => {
            // If any error occurs in the delay chain, reject the main promise
            reject('Countdown failed: ' + err);
        });
});

myPromiseDelay
    .then((successMessage) => console.log('Success: ', successMessage))
    .catch((errorMessage) => console.error('Error caught: ', errorMessage));


////////////////////////////////////////////////////////////////////////////////


// What is Async/Await in JavaScript?
// 'async' and 'await' keywords are used to make Promises easier to write.
// - The 'async' keyword is added before a function, and makes the function return a Promise:
async function myFunction() {
    return "Hello";
}

// 'myFunction()' function is returning a Promise Object, hence you can use the '.then()' function
// and '.catch()' function 
myFunction()
    .then((successMessage) => console.log('Success: ', successMessage))
    .catch((errorMessage) => console.log('Error caught: ',errorMessage));

//   You can actually omit the '.catch()' function here since you are guranteed to get a normal 
//   (success) value, not an error
//   myFunction()
//       .then((successMessage) => console.log('Success: ', successMessage));


// - The 'await' keyword can only be used inside a 'async' function, which makes the function 
//   pause the execution and wait for a resolved Promise before it continues. Usually it is coupled
//   with a try-catch statement, and it makes it replaces the functionality of the '.then()' function
//   and '.catch()' function
async function myFunction2() {
    try {
        const message = await Promise.resolve("Hello from async!");
        // If the Promise resolves (which it always will in this case)
        console.log('Success (inside myFunction2):', message);
    } catch (error) {
        // If the Promise rejects (which it never will in this case)
        console.error('Error caught (inside myFunction2):', error);
    }
}
// Calling 'myFunction2()' function
myFunction2();




// So how does Promises and Async/Await solve the callback hell problem?
// Lets try to implement our callback hell problem code from the above section, but using Promises 
// and Async/Await instead, which does the exact same thing, but the code structure looks much even neater
async function delayFunction() {
    const delay = ((ms) => new Promise(resolve => setTimeout(resolve, ms)));

    console.log('3');
    await delay(1000);
    console.log('2');
    await delay(1000);
    console.log('1');
    await delay(1000);
    console.log('Go!');
}

delayFunction();



    
// Source(s):
// - https://www.youtube.com/watch?v=670f71LTWpM (James Q Quick) (YouTube video by James Q Quick
//   titled, 'Asynchronous JavaScript in ~10 Minutes - Callbacks, Promises, and Async/Await')
// - https://blog.avenuecode.com/callback-hell-promises-and-async/await (AvenueCode)
// - https://www.geeksforgeeks.org/what-to-understand-callback-and-callback-hell-in-javascript/ (GeekforGeeks)
// - https://www.w3schools.com/js/js_promise.asp (GeekforGeeks)
// - https://www.w3schools.com/js/js_async.asp (GeekforGeeks)