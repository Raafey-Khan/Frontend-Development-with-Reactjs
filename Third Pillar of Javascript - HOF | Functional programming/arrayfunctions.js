/* arrays are also custom objects in JS.....


index of the element is the key and the element it self is the value 

["abc", "def", "ghi"] --> objects {0: "abc", 1: "def", 2: "ghi"} 

*/


/*

map function

map is a higher order function avaiable with arrays
it takes a function as an arugment -> f
and it returns an array in which every value is actually populated 
by calling function f with original array element as argument

// Every element of the original array is passed by one by one in the argument function f

and then whatever is the output for each individual element , we populate that element in the array




 * map internally iterates/loops over every element of the given original array

 * pass that element in the argument function f and then store the returned 
 * value inside an array
*/

function square(el){
    
    return el*el; // returning square
} 


function cube(x){
    return x * x * x
}

function isEvenOrOdd(x) {
    if (x % 2 == 0 ){
        return "Even";
    } else {
        return "Odd"
    }
}


const arr = [1,2, 3, 4, 5]; // original array

const result = arr.map(square);  // square is function passed as an argument.  
// on arr call the map function
// map function take function as an argument
/*
square(1)  ---> 1
square(2) ---> 4
square(3) ---> 9
square(4) --> 16
square(5) --> 25
*/
console.log(result);








//  Sample API response

const apiResponse = [

    {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@example.com"
    },
    {
        "id": 2,
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "jane.smith@example.com"
    }
]

 
function transformUserData(user) {
    return {
        id: user.id,
        fullName: `${user.first_name} ${user.last_name}`,
         email: user.email
    };
}

const transformedUsers = apiResponse.map(transformUserData);

// console.log(transformedUsers);  Production level example



const cubeReult = arr.map(cube)
console.log(cubeReult);


//      [1,2,3,4,5,6] => isEvenOdd
const evenodd = arr.map(isEvenOrOdd); // just map through all ements in the arr from the function and populate an array
            //  map will loop over every element of the original array





// Imp points, map iterates over elments like for loop in the orignal array