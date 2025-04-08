/*


filter
Purpose: Select elements from an array based on a condition.
Function: Iterates over array elements, 
applies the given function, 
and returns a new array
 containing only the elements for which the function returns true

* Filter Function
* Filter is also a higher order function
* Filter also loops over the array element
* There is one special thing about filter, i.e. the argument function f which we have to pass inside
* filte should always return a boolean, otherwise output will be converted to boolean


* Filter loops over every element, pases that element in the argument function and then 
   if the output of this function call is true, then it stores the original element in the new
   aray, otherwise doestn add thied element to the arry
*/

function oddOrEven(x){ // 
    return (x % 2 == 0); // returning a boolean, true (return) in a new array else not based on the function which is applied
}
let arr = [1, 2, 3, 4, 5, 7, 8, 9]

const result = arr.filter(oddOrEven);

console.log(result); // why 2, 4, 6, 8

//  array-filter starts looping over the array , first element
//  is 1 , and i will pass 1 inside oddOrEven 
//  overall in filter , if true as per function then, yes
//  only that(true) value will return else no