// States

// if we called resolve function then
// promise will fulfilled 


// and if we called rejected function then
// promises will be rejected

// but if we didnt called, anything,
// then promise will be in pending state

// and with whatever argument we call resolve, reject

// then it will be assigned to a value property


function getRandomInt(max){
    return Math.floor(Math.random() * max)
}


function CreatePromiseWithLoop(){
    return new Promise(function exec(resolve, reject){
    
    for (let i = 0; i < 1000000000; i++){};
    let num = getRandomInt(10);
     if (num % 2 == 0){
        // if even we fulfilled
        resolve(num);
     } else{
        // if odd we reject
        reject(num);
     }
    })
}

let n = CreatePromiseWithLoop();
console.log(n);