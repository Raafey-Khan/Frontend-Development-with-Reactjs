function createPromise() {
    return new Promise(function exec(resolve, reject) {
        setTimeout(function () {
        console.log("Resolving the promise");
        reject("Done")
        }, 1000);
    });
}

let p = createPromise();
p.then(function fullfillHandler1(value) { // microtask
    console.log("we fulfilled1 with a value,", value);
}, function rejectionhandler(value) {
    console.log("we reject1 with a value", value);
});

p.then(function fullfillHandler2(value) { // microtask
    console.log("we fulfilled2 with a value,", value);
}, function rejectionhandler2(value) {
    console.log("we reject2 with a value", value);
})


for(let i = 0 ; i < 10000000000; i++) {
    
}

console.log("ending"); //global



/*
Whatever the promise handlers , but 
until the reject() or resolve function is
not been executed

handlers will not been registered and
will not be stored in microtask queue
*/