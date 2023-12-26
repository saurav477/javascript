//concat()
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); 

// entries()
let array3 = ['a', 'b', 'c'];
let iterator = array3.entries();
for (let entry of iterator) {
  console.log(entry); 
}

// every()
let ages = [18, 20, 25, 30];
let isAllAdult = ages.every(age => age >= 18);
console.log(isAllAdult); 

// fill()
let array = [1, 2, 3, 4, 5];
array.fill(0, 2, 4);
console.log(array); 

// filter()
let array123 = [1, 2, 3, 4, 5];
array.fill(0, 2, 4);
console.log(array123); 

// find()
let numbers2= [10, 20, 30, 40, 50];
let found = numbers2.find(num => num > 25);
console.log(found); 

// findIndex()
let numbers = [10, 20, 30, 40, 50];
let foundIndex = numbers.findIndex(num => num > 25);
console.log(foundIndex); 

// forEach()
let array11 = ['a', 'b', 'c'];
array11.forEach(item => {
  console.log(item); 
});

// includes()
let array12 = [1, 2, 3];
console.log(array12.includes(2)); 
console.log(array12.includes(4)); 

// indexOf()
let array66= [1, 2, 3, 4, 5];
let index6 = array66.indexOf(3);
console.log(index6); 

// isArray()
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('hello')); 

// join()
// keys()
// lastIndexOf()
// map()
// pop()
// push()
// reduce()
// reverse()
// shift()
// slice()
// toLocaleString()
// toString()
// unshift()
// values()