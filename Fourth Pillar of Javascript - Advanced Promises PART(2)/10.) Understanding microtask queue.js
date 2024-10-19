// Handler state result goes to microtask queue

// Once the state of the promise changes, 
/* 
Then handlers whether it is 

fullfillment handler or rejection handler
of the promise object
goes inside the microtask queue

they sit and wait for the event loop to show
them a signal
and what signal do the event loop will show
event loop will check is the call stack is empty 


once the callstack is empty and all the functions and 
global peice of
code is done executing

then event loop one by one
start taking the callbacks from the microtask queue
to callstack and execute that even if there a macrotask queue
execution is left , cause microtask queue is higher priority
*/

function createPromise() {
    return new Promise(function exec(resolve, reject) {
        console.log("Resolving the promise");
        resolve("Done")
    });
}

setTimeout(function process() { //macrotask 
    console.log("Timer completed");
}, 0);

let p = createPromise();

/*
Obviously Microtask queue priority is higher 
then the Macrotask queue in terms of execution of web apis

Microtask queue: Promise Handlers .then
Macrotask queue: SetTimeout, async, events etc
Normal Function: Callstack
Global code: Callstack
*/

p.then(function fullfillHandler1(value) { // microtask
    console.log("we fulfilled1 with a value,", value);
}, function rejectionhandler() {})

p.then(function fullfillHandler2(value) { // microtask
    console.log("we fulfilled2 with a value,", value);
}, function rejectionhandler() {})


p.then(function fullfillHandler3(value) { // microtask
    console.log("we fulfilled3 with a value,", value);
}, function rejectionhandler() {});

for(let i = 0 ; i < 10000000000; i++) {
    
}

console.log("ending"); //global


/*
Whatever your promise it will change 
and fullfillment Handler state
or rejection Handler state will stored
inside fullfilment handler array
and rejection handler array

fullfillment Handler: [fh1, fh2, fh3]
Rejection Handler: [rh1, rh2, rh3]

const p = createPromise() <-- p becomes promise object
now p contains
pending state default
undefined value
handler array fh, rh
*/