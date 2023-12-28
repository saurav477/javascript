//concat()
{let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); 
}

// entries()
{let array = ['a', 'b', 'c'];
let iterator = array.entries();
for (let entry of iterator) {
  console.log(entry); 
}}

// every()
{let ages = [18, 20, 25, 30];
let isAllAdult = ages.every(age => age >= 18);
console.log(isAllAdult); }

// fill()
{let array = [1, 2, 3, 4, 5];
array.fill(0, 2, 4);
console.log(array); }

// filter()
{let array = [1, 2, 3, 4, 5];
array.fill(0, 2, 4);
  console.log(array);} 

// find()
{let numbers= [10, 20, 30, 40, 50];
let found = numbers.find(num => num > 25);
console.log(found);} 

// findIndex()
{let numbers = [10, 20, 30, 40, 50];
let foundIndex = numbers.findIndex(num => num > 25);
console.log(foundIndex); 
}
// forEach()
{let array= ['a', 'b', 'c'];
array.forEach(item => {
  console.log(item); 
});
}
// includes()
{let array= [1, 2, 3];
console.log(array.includes(2)); 
console.log(array.includes(4)); 
}
// indexOf()
{let array= [1, 2, 3, 4, 5];
let index = array.indexOf(3);
console.log(index); 
}
// isArray()
{console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('hello')); 
}
// keys()
{let array = ['a', 'b', 'c'];
let keys = array.keys();
for (let key of keys) {
  console.log(key); 
}
}
// join()
{let array = ['a', 'b', 'c'];
let joined = array.join('-');
console.log(joined); 
}
// lastIndexOf()
{let array = [2, 5, 9, 2];
console.log(array.lastIndexOf(2)); 
}
// map()
{let num = [1, 2, 3];
let doubled = num.map(num => num * 2);
console.log(doubled);
}
// pop()
{let array = [1, 2, 3];
let removed = array.pop();
console.log(removed); 
console.log(array);
}
// push()
{let array = [1, 2, 3];
array.push(4);
console.log(array); 
}
// reduce()
{let numbers= [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
}
// reverse()
{let array = [1, 2, 3];
array.reverse();
console.log(array); 
}
// shift()
{let array = [1, 2, 3];
let shift = array.shift();
console.log(shift);
console.log(array); 
}
// slice()
{let arrray = ['a', 'b', 'c', 'd', 'e'];
let sliced = arrray.slice(1, 4);
console.log(sliced); 
}
// toLocaleString()
{let number = [1000, 2000, 3000];
console.log(number.toLocaleString()); 
}
// toString()
{let array = [1, 2, 3];
let stringRepresentation = array.toString();
console.log(stringRepresentation);
}
// unshift()
{let array = [1, 2, 3];
array.unshift(0);
console.log(array); 
}
// values()
{let array = ['a', 'b', 'c'];
let values = array.values();
for (let value of values) {
  console.log(value); 
}
}