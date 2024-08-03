// map, filter, reduce: this 3 are HOF takes another func as argument



/*
* Reduce: is a higher order function available for arrays
* Reduce: also takes a function f as an argument,
* what reduce does is, it one by one goes to every element of the array,
* say the current element is arr[i] 
* reduce will pass this element to the function f, and accumulate the result of further fuction calls
* with this particular result
*/


//  Golden tip: if you stuck in any concept: go through as much as exmaples so you can to understand that stuff, in different edge cases

const arr = [1, 2, 3, 4, 5, 6] 
//  it starts from index 1
function sum(prevResult, currValue){
    console.log(prevResult, currValue);
    return prevResult + currValue;
}

const result = arr.reduce(sum);

console.log(result);

/*
* first element --> 2
* second element --> 3
* third element -->> 4
* fourth element ---> 5
* fifth element --> 6
final result = 21 ecumulate 
*/


/*
Reduce in real life application

* Cart --> [iphone {price: 100000, name: "Iphone"}, 
case {price: 500, name: "backvoer"}, 
temered glass {price: 300, name: tempered glass}]
*/

// you have to show total amount from these cart

function addPrices(prevResult, currValue) {
    console.log(prevResult.price, currValue.price);
    let newPrice =  prevResult.price + currValue.price;
    return {price: newPrice};

}
let cart = [{price: 100000, name: "Iphone"}, {price: 500, name: "backvoer"},  {price: 300, name: "tempered glass"}];

const totalPrice = cart.reduce(addPrices);

console.log(totalPrice);