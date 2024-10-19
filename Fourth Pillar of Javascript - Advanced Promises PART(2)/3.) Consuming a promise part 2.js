function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}


function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise contructor");
        setTimeout(function () {
            let num = getRandomInt(10);
            if(num % 2 == 0) {
                // if the random number is even we fulfill
                resolve(num);
            } else {
                // if the random number is odd we reject
                reject(num);
            }
        }, 10000);
        console.log("Exiting the executor callback in the promise contructor");
    });
}

console.log("Starting....");

const p = createPromiseWithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like ...", p);
p
.then(
    function fullfillHandler(value) {
        console.log("Inside fullfil handler with value", value);
        console.log("Promise after fullfillment is", p);
    },
    function rejectionhandler(value) {
        console.log("Inside rejectionhandler with value", value);
        console.log("Promise after rejection is", p);
    }
)


// How to consume a promise
// call the promise
// rejister two handlers fullfilment, rejection
// the two functions in the .then are callbacks whatever the promise
// either fullfilled or rejected that callback will be executed