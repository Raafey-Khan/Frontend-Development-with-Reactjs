/**
 * Callback problems
 * 1. Inverstion of control 
 * 2. Callback hell: Pyramid of Doom --> Readability problem*/



/**
 * Opinion on callback hell
 * 
 * if you have 1 or 2 level nesting thats okay,
 * if its not reaching a nesting level that hampers
 * your logic, and making problem in readability 
 * 
 * 
 * cause did you know ?
 * 
 * before introduction of promises
 * a very large codebase was already written on 
 * callbacks, and people used to manage it somehow so no problem at all*/ 

// Example of nesting results a callback hell


function a1(callback){
    console.log('Im function a1');
    callback();
}

function a2(callback){
    console.log('Im function a2');
    callback();
}


a1(function result(){
    a2(function results(){
        a1(function resultAgain(){
            a2(function resultsAgain(){
                console.log('Deep nesting can get confusing!');
            });
        });
    });
});

console.log("");
console.log("");


/**
 * Inversion of control
 */


// let arr = [1, 10, 1000, 9, 2, 3, 11];

// arr.sort(function cmp(a, b){ // callback
//     return a - b;
// })

// console.log('Inversion of Control');
// console.log(arr);


function doTask(fn, x){ // Team A
    
    // whole implementation is done by team A

    // lets say if this is a payment logic, so by these mistakely things can hppen like you charge the user twice, or mistakely comments can be make the product free, so inversion of control can heppen here.
    fn(x * x); // calling my callback with square of x
    // dont know what things can be changed by team A that probably will affect the code wriiten by team b

    // these is called inversion of control
}


// here team b tries to use it
// calling doTask as callback
doTask (function (num){ // due to callbacks, i am passing control of how exec should be called to dotask
    // this is called inversion of control
    console.log("Woah num is", num);
}, 9);


/** What is inversion of control ?
 * Ans: The control of your exact function,
 *      which was your implementation you have passed
 *      the control of how this function to be called
 *        to someone else
*/