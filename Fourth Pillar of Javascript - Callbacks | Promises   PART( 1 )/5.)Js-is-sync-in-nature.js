/**
 *  Javascript is sync in nature
 *  as if there is peice of code line by line
 * so defaulty js will execute it, by one by one
 * 
 * and if any of code on the line takes much time, js
 * will wait until and unless its note executed
 * js will not come to the second line 
 */

// console.log("Hi we are starting");

// // for(let i = 0; i < 10000000; i++){ wait until not executed
// //     // some task
   
// // }


// console.log("Done");


console.log("hi");
setTimeout(function () { console.log("time done")}, 5000)
console.log("by");
