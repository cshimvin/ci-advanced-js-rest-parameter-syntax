/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const addNumbers = (a, b, c) => a+b+c;
let sum1 = addNumbers(1, 2, 3);
console.log("Sum1: ", sum1);
// Extra arguments are ignored
const addNumbers2 = (a, b, c) => a+b+c;
let sum2 = addNumbers2(1, 2, 3, 4, 5, 6);
console.log("Sum2: ", sum2);
// Function using ...rest
const addNumbers3 = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (i of rest) {
        sum += i;
    }
    return sum;
}
let sum3 = addNumbers3(1, 2, 3, 4, 5, 6);
console.log("Sum3: ", sum3);
