console.log("Start of the file"); // first line

setTimeout(function timer1() {
    console.log("Timer 1 done"); //fifith line
}, 0);

for(let i = 0; i < 10000000000; i++) { //second line
    // something
}
console.log('loop done');
let x = Promise.resolve("Sanket's promise"); //Promise resolve giving signal to handlers

x.then(function processPromise(value) {
    console.log("Whose promise ?", value); //fourth line
})

setTimeout(function timer2() {
    console.log("Timer 2 done"); //sixth line
}, 0);

console.log("End of the file"); // third line


/*
Same like

function f() {
    return new Promise(function exec(resolve, reject) {
        resolve()
        reject()
    })
}

Promise.resolve();
Promise.reject();
*/