// // Index means Postioning of value


// let a = "W O R L D";
// //       0 1 2 3 4



// // Another Example

// let mrr = "microsoft";

// console.log(mrr[2]); // prints c from refrence to position at index 2 

// console.log(mrr[9]); // print undefined cause were ending at index 8;


// for (let idx = mrr.length - 1; idx >= 0; idx--){
//     console.log(idx, mrr[idx]);
// }
// console.log("")
// console.log('')

// let name = "Rafay khan";

// for (let i = 0; i <= name.length - 1; i++){
//     console.log(i,name[i]);
// }

// // Decipher Logic



// function checkPalindrome(num){
//     var str = "" + num;  // conversion is happening here 

//     if (str[0] === str[str.length - 1] &&  str[1] === str[str.length - 2] && str[2] === str[str.length - 3]){
     
//     return "Palindrome String"
    
//     } 
    
//     else{
//         return "NOt a Palindrome"
//     }
// }
// console.log(checkPalindrome(15651));

// // Optimized version

// function checkPal(num){
//     var str = "" + num;

//     return (str[0] === str[str.length - 1] && str[1] === str[str.length - 2] && str[2] === str[str.length - 3]) ? "Palindrome String" : "Not a Palindrome";
// }

// console.log(checkPal(23432));


// Crazy Sanket Logic

function checkRaaf(num){
    let str = " " + num;

    let i = 0;

    let j = str.length - 1;

    while (i <= j){
        if(str[i] == str[j]){

       
        i++;
        j--;
    } else{
        return false
    }
}
return true;
}

console.log(checkRaaf(12521))