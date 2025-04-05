const searchFunctions = require('./cjsdemo');  // default exports

console.log(searchFunctions.linearSearch([1,2,3,4,5], 0));


// destructing

const {linearSearch , binarySearch} = require('./cjsdemo'); //named exports

console.log(linearSearch);

console.log(binarySearch);