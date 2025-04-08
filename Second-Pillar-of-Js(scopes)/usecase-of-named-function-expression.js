// function fun(fn) {
//     console.log("Welcome to fun");
//     fn();
// }

// fun(function() {
//     console.log("Wow so fun");
    
// })

// [1,2,3,4,5]

function factorial(n) {
    return n <= 1 ? 1 : factorial(n - 1) * n;
}

console.log([1, 2, 3, 4, 5].map(factorial)) 