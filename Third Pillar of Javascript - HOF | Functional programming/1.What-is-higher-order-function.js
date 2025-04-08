// higher order function

// functions which takes another functions as arguments are known as HOF

function f(x, fn) {
    // x --> number
    // fn --> function
    console.log(x);
    fn();
}

f(10, function exec() {
    console.log("I am an expression passed to a HOF");
})