//Create 4 functions for add , subutract , multiply and divide 2 numbers and return the result
function add(a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}

function multiply(a, b) {
return a * b;
}

function divide(a, b) {
    if (b === 0) {
return "Cannot divide by zero";
    }
return a / b;
}
let x = 10;
let y = 5;

console.log("Addition:", add(x,y));
console.log("Subtraction:", subtract(x,y));
console.log("Multiplication:", multiply(x,y));
console.log("Division:", divide(x,y));