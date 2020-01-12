// 50. call(), apply(), and bind()

let movieDirector = {
  firstname:'Taika',
  lastname: 'Waititi',
  getFullname: function() {
    let fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

// The bind method can control to which object 'this' should point to
let logName = function(nat, age) {
    console.log(this.getFullname());
    console.log(`${nat} ${age}`)
}.bind(movieDirector);


// The call method sets 'this' to movieDirector and executes the function 
// with the given parameters.
logName.call(movieDirector,'New Zealand', 46); 

// The .apply() method wants an array of parameters instead of a normal list 
// and profits when we have lots of numbers to pass it as parameters for an example.
logName.apply(movieDirector,['New Zealand', 46]);



// Setting the function statement as a function expression
(function(nat, age) {
  console.log(this.getFullname());
  console.log(`${nat} ${age}`)
}).apply(movieDirector,['New Zealand', 46]);


// function borrowing
let actor = {
  firstname: 'Adam',
  lastname: 'Driver'
}

console.log(movieDirector.getFullname.apply(actor));
