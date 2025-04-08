// const searchFunctions = require('./cjsdemo.js');  // default exports

// console.log(searchFunctions.linearSearch([1,2,3,4,5], 0));


// destructing

// const {linearSearch , binarySearch} = require('./cjsdemo.js'); //named exports

import { linearSearch  , raafay as pape} from "./cjsdemo.mjs";
import mergesort , { binarySearch as bs} from './cjsdemo.mjs'
// when you use esm then you should add the extension too
// it expects a .js js file cause you are calling it from the .mjs one thats why
console.log(linearSearch);

pape('yusuf')
mergesort()

// IN CSM Whatever function you want to export
// just preprend or write before the
//  function (a key word -(export))