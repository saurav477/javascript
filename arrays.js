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
let array4 = [1, 2, 3, 4, 5];
array4.fill(0, 2, 4);
console.log(array4); 

// filter()
let array5 = [1, 2, 3, 4, 5];
array5.fill(0, 2, 4);
console.log(array5); 

// find()
let numbers2= [10, 20, 30, 40, 50];
let found = numbers2.find(num => num > 25);
console.log(found); 

// findIndex()
let numbers = [10, 20, 30, 40, 50];
let foundIndex = numbers.findIndex(num => num > 25);
console.log(foundIndex); 

// forEach()
let array6 = ['a', 'b', 'c'];
array6.forEach(item => {
  console.log(item); 
});

// includes()
let array7 = [1, 2, 3];
console.log(array7.includes(2)); 
console.log(array7.includes(4)); 

// indexOf()
let array8= [1, 2, 3, 4, 5];
let index6 = array8.indexOf(3);
console.log(index6); 

// isArray()
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('hello')); 

// keys()
let array22 = ['a', 'b', 'c'];
let keys = array22.keys();
for (let key of keys) {
  console.log(key); 
}

// join()
let array9 = ['a', 'b', 'c'];
let joined = array9.join('-');
console.log(joined); 

// lastIndexOf()
let array10 = [2, 5, 9, 2];
console.log(array10.lastIndexOf(2)); 

// map()
let num = [1, 2, 3];
let doubled = num.map(num => num * 2);
console.log(doubled);

// pop()
let array11 = [1, 2, 3];
let removed = array11.pop();
console.log(removed); 
console.log(array11);

// push()
let array12 = [1, 2, 3];
array12.push(4);
console.log(array12); 

// reduce()
let numberss = [1, 2, 3, 4, 5];
let sum = numberss.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// reverse()
let array13 = [1, 2, 3];
array13.reverse();
console.log(array13); 

// shift()
let array14 = [1, 2, 3];
let shifted = array14.shift();
console.log(shifted);
console.log(array14); 

// slice()
let arrray15 = ['a', 'b', 'c', 'd', 'e'];
let sliced = arrray15.slice(1, 4);
console.log(sliced); 

// toLocaleString()
let number = [1000, 2000, 3000];
console.log(number.toLocaleString()); 

// toString()
let array16 = [1, 2, 3];
let stringRepresentation = array16.toString();
console.log(stringRepresentation);

// unshift()
let array17 = [1, 2, 3];
array17.unshift(0);
console.log(array17); 

// values()
let array18 = ['a', 'b', 'c'];
let values = array18.values();
for (let value of values) {
  console.log(value); 
}
