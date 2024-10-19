// We are Saved from inversin of control
// we are not giving access to our callback
// power of promise
function download(url) {
    return new Promise(function exec(res, rej) {
        console.log("Started downloading from ", url);
        setTimeout(function p() {
            console.log("Completed downloading data in 5s");
            const content = "ABCDEF";
            res(content);
            res(content); // two times still doest happening the inversion of control here
        }, 5000)
    })
}

x = download("www.xyz.com")

y = x.then(function fulfillhandler(value){
    console.log("Content downloaded is", value);
})

// Beauty of promises
// not providing the access to the callback and 
// control over a callback
// and stops from leading inversion of control