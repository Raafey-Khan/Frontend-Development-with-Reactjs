console.log("Hi we are starting");

for(let i = 0; i < 10000000; i++){ // wait until not executed
    // some task
   
}


console.log("Done");


console.log("hi");
setTimeout(function () { console.log("time done")}, 5000) // not waiting why
console.log("by");


/**
 * when we used for loop, javascript waiting
 * and when we used setTimeout javascript was not waiting
 */