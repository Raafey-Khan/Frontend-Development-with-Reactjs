// Dot then function also returns a promise
// .then can take 2 arguments

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

x
.then(function fulfillhandler1(value){
    console.log("Content downloaded is1", value);
    return "New promise string"
   
   
},
function rejectHandler1(value) {
    console.log("rejected with", value);
}
)
.then(
    function newFullFillHandler(value){
        console.log("value from chained then promise", value);
    }
)

/*
The .then function returns a new promise object 
it immediately returns a new Promise object
*/

// if i returned someting in the .then handler,
// so that returned value will be a fullfilled value
// for my .then chained promise
