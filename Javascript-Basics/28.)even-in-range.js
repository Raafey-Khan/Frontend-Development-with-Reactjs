

function toEven(num){
    if (num % 2 == 0){
        return 'Even';
    }

    else{
        return 'Odd'
    }
}


for (let i = 0; i <= 20; i++){
    console.log(i, 'is',toEven(i))
}