/* 
p.then(fullfillmenthandler, rejectionhandler) <- takes two parameter

         these are handler fuction, that we have to
         implement ourselves
*/

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {

        setTimeout(function() {

            let num = getRandomInt(10)
            if (num % 2 == 0) {
                // if the random is even we fullfill

                console.log("fulfilling");

                resolve(num);

                console.log("Completed resolving");
                resolve(10);
                console.log("resolvinig again");

                return num;
            }   else {
                // if the random number is odd we reject

                console.log("rejecting");

                reject(num);

                console.log("Completed rejecting");

                reject(11);


                console.log("rejecting again");

                return num;
            }
        }, 10000);
    })
}