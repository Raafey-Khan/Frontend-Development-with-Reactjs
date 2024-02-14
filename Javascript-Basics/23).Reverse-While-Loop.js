let i = 10;

while (1 <= i){
    // While debugging i noticed that
    // (1<=1) is true thats why the last value will be 0
    console.log(i);
    i -= 1
}

console.log("END")
console.log(i,'because the loop made it 0 to make the conditon false and stop the loop')