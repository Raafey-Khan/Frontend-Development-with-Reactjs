function timeConsumingByLoop() {
    console.log("loop starts");
    for(let i = 0; i < 10000000000; i++){
        //  some task
    }
    console.log("loop ends");
}


function timeConsumingByRuntimeFeature() {
    console.log("Starting timer");

    setTimeout(function exec() {
        console.log("Completed the timer");
    }, 50000)
}

console.log("Hi");
 timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();
console.log("By");