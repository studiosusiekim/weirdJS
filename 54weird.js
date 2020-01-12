<<<<<<< HEAD

=======
>>>>>>> e741103dd8ba7774cc20b877188dba359c842ea9
// Object Oriented Javascript and Prototypal Inheritance
// 53 Conceptual Aside: Classical vs Prototypal Inheritance

/*
Inheritance: one object gets access to the properties and methods 
of another object.

Classical versus prototypal Inheritance.

Classical Inheritance - It's a way of sharing methods and properties of objects.
Prototypal Inheritance - very flexible, very extensible, and very easy to understand.
*/


/* 54 Understanding the Prototype

All objects In JavaScript, and that includes functions,
all objects have a prototype property.
Each object can have its own prototype, 
prototype object itself can also point to another prototype/object.

The prototype chain -  where we have access to a property or method amongst a sequence of objects.

Let's say obj2, it can point to the same object as obj1's prototype, So objects can share all the same prototypes.

*/

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName()); // When the method invokes the getFullname
                                 // this.firstname and this.lastname refers to john. Whatever object originated the call this will refer to the object.

console.log(john.firstname);     // if it finds the property on the object                                   it has been called it returns it and                                       stops.

// The JavaScript engine starts at the top of the chain and works it's way down, and stops, the first time it finds what it's looking for.

var jane = {
    firstname: 'Jane'   
}

jane.__proto__ = person;
console.log(jane.getFullName()); // Jane Default

// The JS engine searches for lastname on the Jane object, doesn't find it,looks at the prototype, which is person, and finds lastname there.