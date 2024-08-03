// When to use maps


/*
* In any situation when we have to do an operation on every element of
* The array and store the result of each opearation 
* map can be good option


Building Flipcart
* For example:
* Array of products (objects).
* i will fetch the key and value through map and return a copy
* of proper list of names 


*/



const newArr = ['R', 'A', 'A', 'F', 'A', 'Y'];
/*
* if the function that we are passing takes two arguments
* then first argument will be accessing the actual value
* second 
*/
function print(element, index) {
// if two argumens first element second index
    return `Element at index ${index} is ${element}`; // Internpolated string / Template Literals (ES6)
}

/*
* here map is looping over every element
* and then passing element, index in the function  print
*/

const result2 = newArr.map(print)

// console.log(result2); 


function customMapper(arr, func){
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i))
    }

    return result;
}


const value = customMapper(newArr, print);

console.log(value);