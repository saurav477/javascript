//wite a function parameter that takes a string parameter and returns its length
function stringLength(str) {
    return str.length;
}
let string1 = "Hello World!";
console.log(`The length of the string ${string1} is ${stringLength(string1)}`);

//Write a function that take a string parameter, splices a part of that string and returns the value
function spliceString(inputString, startIndex, endIndex) {
    const splicedPart = inputString.slice(startIndex, endIndex);
    return splicedPart;
}
const input = "Hello World!";
const start = 3;
const end = 7;
const result = spliceString(input, start, end);
console.log(result); 



//Write a function that takes 2 string parameters and checkts if the second parameter is contained in the first one
function iscontained(first, second) {
    return first.includes(second);
}
const string2= "how are you?";
const string3 = "how";
console.log(iscontained(string2, string3));


//Write a function that take a string parameter and a character and returns the index of that character( using indexOf,lastIndexOf and search ) 
//Write a function that  takes 2 string parameters and returns total match of second parameter to the first one


