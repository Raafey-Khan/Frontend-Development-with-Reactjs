function checkEven(){
    for (let i = 1; i <= 10; i++){
        if (i % 2 == 0){
            console.log(i,'is','even')
        }
        else{
            console.log(i,'is','odd')
        }
    }
}

console.log(checkEven())