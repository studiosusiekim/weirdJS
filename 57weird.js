// 57 Building Objects


/*
There are other ways and new ways coming to build objects in JavaScript,this is one of those things you need to know because its ubiquitous.

Function constructors and the keyword new.

The new keyword(
    ,which was basically introduced to make Java and similar language developers feel comfortable,
    ) 
is actually an operator :)

*/


function Drink() {		

    this.look = 'colorful';             
    this.taste= 'yum';
  }

const milkshake = new Drink();  // when we say 'new', immediately, an empty 
                                 // object is created. Then it invokes 
                                 // the function Drink()
                                 // Everytime a function is called the variable 'this' is created.
                                 // In case of using the keyword 'new','this' changes where the variable points to - it points to the new empty object. 

                                 // As long as the function which the 'new' keyword is used on doesent return a value, the JS engine will return the new object created by the 'new' keyword.
                                 

console.log(milkshake);          // Drink { look: 'colorful', taste: 'yum' } 




/*
Function constructors are just functions.

A normal function that is used to construct objects.
The 'this' variable points a new empty object and that object is returned from the function automatically.

The 'new' operator makes the new object.
And function constructors (via parameters) are used for adding properties and methods to that new object.
*/

  // Function Constructor with parameters to construct the new object


  function Drink(look, taste) { 
    this.look = look;
    this.taste= taste;
    }
  
  
    //const milkshake = new Drink('pink', 'sweet berry!');
    const matchaLatte = new Drink('green', 'fine & awake'); 
    console.log(matchaLatte); 