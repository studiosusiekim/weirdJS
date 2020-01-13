var _ = require('underscore');

/* 56 Reflection and Extend

Reflection: An object can look at itself, listing and changing its properties and methods.
*/

//example of refection in JavaScript.
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
// we are looping across the the object.
john.__proto__ = person;
for ( var prop in john) {               
    console.log(prop + ': '+ john[prop]);  
}

/*
firstname: John
lastname: Doe
getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
        
        it reached out and grabbed every property
        and method not just on the object 
        but also on the object's prototype(here - person object).

    }
*/


// to check  what properties and methods are on the object itself.(here - john object).
john.__proto__ = person;
for ( var prop in john) {  
    // if (john.hasOwnProperty('firstname')) // true
    if (john.hasOwnProperty(prop)) {      
    console.log(prop + ': '+ john[prop]);  
    }
}

/*
firstname: John
lastname: Doe
*/

// checking if john has the property 'firstname'
john.__proto__ = person;
for ( var prop in john) {  
    if (john.hasOwnProperty('firstname')) {      
    console.log('yes, it has');  
    }
}

// Using underscore.js 
var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;   
    }
}

var jim = {
    getFirstName: function() {
        return firstname;   
    } 
}

// Extend a given object with all the properties in passed-in object(s).
_.extend(john, jane, jim);
console.log(john);
// firstname: 'John',
//   lastname: 'Doe',
//   address: '111 Main St.',
//   getFormalFullName: [Function: getFormalFullName],
//   getFirstName: [Function: getFirstName]


// this is what _.extend() function does
// An internal function for creating assigner functions.
var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };