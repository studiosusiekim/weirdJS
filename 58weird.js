// Function Constructors and 'Prototype"

/*
Every function in JavaScript has a prototype
property that starts off its life as an empty object.
It exists and does nothing until we are using the function as a function constructor.

But as soon as we use the 'new' operator to invoke the function, to build objects in this special way, the prototype property is used.

The prototype property on a function is not the prototype of the function.
It's the prototype of any objects created
if you're using the function as a function constructor.
*/

function actionHero(firstname, lastname) {		
    this.firstname = firstname;
    this.lastname = lastname;
}

actionHero.prototype  // an empty object

actionHero.prototype.getFullname = function() {
    return this.firstname + ' ' + this.lastname;
}

// both sly and arnie points it's protoype to actionHero.prototype
// both gets access to the getFullname method
const sly = new actionHero('Sylvester', 'Stallone');
const arnie = new actionHero('Arnonld', 'Schwarzenegger')

// Again ~ as soon as we call the constructor function with new the JS engine look into sly and arnies object and can't find the method getFullname() there, so it goes down the prototype chain to actionHero.prototype which has been activated by using the 'new' keyword and it finds the method there.
// This means: we can add features to all of existing and new objects (van_damme, vin_diesel) at once by using the .prototype property of the function constructor.

/*
Why is the getFullname() method not inside the function constructor?
It's because Functions are objects in Js and they take memory space. 
For every heavy actionHero, we create it will get its own copy of the method.
By adding the method to the prototype, we only have one. The JS Engine will go down the prototype chain and will find the method. 
The properties within the constructor function are necessary as they require different values but not for the method.
*/




