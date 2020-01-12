/*
Everything in JavaScript that isn't a primitive, a number, string, boolean etc.

Functions, arrays, basic objects.
They all have a prototype.

Except for one thing.
The base object in JavaScript.
*/

const a = {};
a.__proto__ // Object {}
/*
The base object is just called object. It's the very bottom of the prototype chain.
*/


const b = function() {};
b.__proto__ // function Empty() {}
/*
The prototype of all functions is called empty function object
Any function you create in JavaScript will automatically have this proto.
And all proto have access to the built in methods.
*/

const c = [];
c.__proto // []

/*
Same with the array proto - All arrays have a prototype pointing to an object to the methods.
*/

c.__proto__.__proto__ // The base Object {}
/*
What's the prototype of the prototype? OBJECTS!
*/



