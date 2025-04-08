let x = 10;


let y = 10;


let z = 10;

// Checking edge cases in x
if (x < y && x < z){
    console.log('The Smallest number in the three is x: ',x);
}

// Checking edge casses in y
else if (y < x && y < z ){
    console.log('The Smallest number in the three is y: ',y);
}
// else remaining conditions come in z
else if (z < x && z < y){
    console.log('The Smallest number in the three is z: ',z)
}
else{
    console.log("Bhai chutya hai kya jo same value rakha hai tune")
}