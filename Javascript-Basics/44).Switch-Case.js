let day = 3;

let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        console.log(dayName);
        break;
    case 2:
        dayName = "Tuesday";
        console.log(dayName);
        break;
        
    case 3:
        dayName = "Wednesday";
        console.log(dayName)
        
    case 4:
        dayName = "Thursday";
        console.log(dayName)
        
    case 5:
        dayName = "Friday";
        console.log(dayName)
        
    case 6:
        dayName = "Saturday";
        console.log(dayName)
        
    case 7:
        dayName = "Sunday";
        console.log(dayName)
        
    case 8:
        dayName = "Invalid day"; 
        console.log(dayName)
        
}

console.log("The day is: " + dayName);

let num = 2

let employe;

switch(num) {
    case 2:
        employe = "Working at google";
        console.log(employe);
        break;

    case 4:
        employe = "Working at Phonepe";
        console.log(employe)
        break;
}

// Same as conditonal


let conditon = (function(){

});

switch (conditon){
    case true:
        console.log("Yes this is first case with true value");
        break; // dont forget to put the breaks
    case false:
        console.log("Unfortunately this is false but you can continue making cases")
        break;
    default:
        console.log('No working man') // we didnt defined the edge casses for if function type occus what to do then
}