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
        }, 1000);
        console.log("Exiting the executor callback in the promise contructor");
    });
}

console.log("Starting....");

const p = createPromiseWithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like ...", p);


console.log("Going to register my 1st set of handlers");
p
.then(
    function fullfillHandler1(value) {
        console.log("Inside fullfil handler 1 with value", value);
        console.log("Promise after fullfillment is", p);
    },
    function rejectionhandler1(value) {
        console.log("Inside rejectionhandler 1 with value", value);
        console.log("Promise after rejection is", p);
    }
)

console.log("Going to register my 2nd set of handlers");

p
.then(
    function fullfillHandler2(value) {
        console.log("Inside fullfil handler 2 with value", value);
        console.log("Promise after fullfillment is", p);
    },
    function rejectionhandler2(value) {
        console.log("Inside rejectionhandler 2 with value", value);
        console.log("Promise after rejection is", p);
    }
)


console.log("Ending........");

for(let i = 0; i < 10000000000; i++){}
console.log("Ending the loop also");