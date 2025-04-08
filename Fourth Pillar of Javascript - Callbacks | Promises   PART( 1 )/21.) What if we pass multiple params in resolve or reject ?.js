// yes but it doest effect


function CreatePromiseWithLoop(){
    return new Promise(function exec(resolve, reject){
    
    for (let i = 0; i < 1000000000; i++){};
    let num = getRandomInt(10);
     if (num % 2 == 0){
        // if even we fulfilled
        resolve(num, 12, "only one");
     } else{
        // if odd we reject
        reject(num, 10, 'nothing works');
     }
    })
}

let n = CreatePromiseWithLoop();
console.log(n);