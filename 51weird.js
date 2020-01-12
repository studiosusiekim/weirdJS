// Implementation of Functional Programming by writing out the map() method.

// Javascript has first class functions.
// Functions which behave as objects.
// You can pass functions as parameters.
// You can return functions from functions.

// We tend to put things into functions in order to limit repetition. 
// This is a classic example of functional programming.
// The advantage of functional programming is to segment the code in even cleaner and tighter ways.



// An arry with items
let arr1 = [1,2,3];
console.log(arr1);

// arr2 has processed items from arr1 
// let arr2 = [];
// for (let i=0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * 2);  
// }
// console.log(arr2);

// To limit repetition we store the concept into a function.
// This is the built in map() function written out 
function mapForEach(arr, fn) {  
let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   // each arr item which will be pushed into the newArr
                         // taking actions by the provided function.
        )
    };                   
    return newArr;       // and returns processed items.
}

// Using the segmented mapForEach function to log arr2 as above (in line 7 -11)
let arr2 = mapForEach(arr1, function(item) {
   return item * 2; 
});
console.log(arr2);

// Using the mapForEach function to log arr3 to check if each item is bigger than 2
let arr3 = mapForEach(arr1, function(item) {
   return item > 2; 
});
console.log(arr3);

// Writing another reuseable function to check a condition by passing two params
let pastLimit = function(limiter, item) { 
    return item > limiter;   
}


// Calling mapForEach and passing the arr1 and a the function pastLimit, 
// making a copy of the function using bind() to set the first param - 
// the limiter to 1 as the function in the mapForEach takes only one 
// param but the pastLimit requires two params.
let  arr4 = mapForEach(arr1, pastLimit.bind(this, 1));
console.log(arr4);

// Using the pastLimit by passing only the limiter as the param
// the function pastLimitSimplified will return a function which does exactly 
// what pastLimit function does. 
let pastLimitSimplified = function(limiter) {
    return function(limiter, item) {  // creating the function objct
        return item > limiter;   
    }.bind(this, limiter); // creating a copy and preset the initial value of limiter 
};

let arr5 = mapForEach(arr1, pastLimitSimplified(2));
console.log(arr5);






























