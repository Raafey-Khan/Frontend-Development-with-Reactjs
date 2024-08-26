function getRandomInt(max){
    return Math.floor(Math.random() * max)
}


function CreatePromiseWithTimeout() {

    return new Promise( function executor(resolve, reject) {

        setTimeout(function () {
            let num = getRandomInt(10);

            if (num % 2 == 0) {
                //  if the random number is even we fullfill

                console.log("fulfilling");
                resolve(num);
                console.log("Completed resolving");
                resolve(10);
                console.log(num);
                console.log("resolving again");
                return num;
                
            } else {
                // if the random number is odd we reject

                console.log("rejecting");
                reject(num);
                console.log("Completed rejecting");
                reject(11);
                console.log("rejecting again");
                console.log(num);
                return num;
                
            }
        }, 1000);
    });
}

let y = CreatePromiseWithTimeout();

console.log(y);


// once you changed your Promise State, it can never be updated

// calling after once doest effect anything your wasting your time