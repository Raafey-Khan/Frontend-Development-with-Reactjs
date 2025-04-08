/**
 * fun -->  HOF ? it takes fn (which is a function)  as argument
 * fn --> function
 */
function fun(x, fn){
   for(let i = 0; i < x; i++){
    console.log(i);
   }

   fn(); // this fn is CallBack function

}

fun(10, function exec(){ // callback
    console.log("I am executded also");
    
})


/**
 * higher order functions consumes some functions
 * as argument, and the function 
 * you passed as argument while calling the HOF function, those are call backs
 */