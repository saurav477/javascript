// Take an input and convert to number, If number canot be converted return a message  "Cannot be converted"


function convertToNumber(input) {
    const parsedNumber = parseInt(input);

    if (isNaN(parsedNumber)) {
        return "Cannot be converted";
    } else {
        return parsedNumber;
    }
}

const userInput1 = "123";
const result1 = convertToNumber(userInput1);
console.log(result1); 

const userInput2 = "ABC";
const result2 = convertToNumber(userInput2);
console.log(result2); 
