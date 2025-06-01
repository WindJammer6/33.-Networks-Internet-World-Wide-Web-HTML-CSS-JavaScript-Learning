// Difference between while loop and do while loop:
// Feature              | while loop                                                | do while loop                                
// Condition Check Time | Checks condition before loop body                         | Checks condition after loop body             
// Minimum Executions   | May execute 0 times                                       | Will execute at least once                  
// Use Case             | When you want to loop only if condition is true initially | When you want to run once anyway, then check 
// Syntax               | `while (condition) { ... }`                               | `do { ... } while (condition);`                  

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);