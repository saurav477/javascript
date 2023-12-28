
//Object.assign()
//Copies the values of all enumerable own properties from one or more source objects to a target object.
{const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const merged = Object.assign(target, source);
console.log(merged); }



//Object.create()
//Creates a new object with the specified prototype object and properties.
{const person = {
    greet: function() {
      console.log('Hello!');
    }
  };
  
  const john = Object.create(person);
  john.greet(); 

}

//Object.entries()
//Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
{const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries); }


//Object.freeze()
//Freezes an object, preventing new properties from being added to it and its existing properties from being removed or changed.
{const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; 
console.log(obj.prop); }



//Object.hasOwnProperty()
//Returns a boolean indicating whether the object has the specified property as its own property.
{const person = { name: 'John', age: 30 };
console.log(person.hasOwnProperty('name')); 
console.log(person.hasOwnProperty('gender'));}


//Object.is()
//compares two values for equality, similar to the === operator but with a few differences 
{console.log(Object.is('hello', 'hello')); 
console.log(Object.is(0, -0)); 
}

//Object.keys()
//Returns an array containing the names of all of the given object's own enumerable string properties.
{const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys); 
}


//Object.valueOf()
//Returns the primitive value of the specified object.
{const obj = { value: 42 };
const primitiveValue = obj.valueOf();
console.log(primitiveValue); }



//Object.values()
//Returns an array containing the values of all enumerable own properties in the given object's order.


{const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values);}


