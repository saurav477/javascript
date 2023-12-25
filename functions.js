//Create 4 functions for add , subutract , multiply and divide 2 numbers return the result
// Function to add two numbers
function add(a, b) {
return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
return a * b;
}

// Function to divide two numbers
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