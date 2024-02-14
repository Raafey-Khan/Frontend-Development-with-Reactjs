// Aproach


// 2 windows

// left contains 0

// right contains 1

// function dnfalgorithm(){
// let x = [1,0,0,1,0,0,1,0,0,1];
// for (let i = 0,m = 0; i <= x.length - 1, m <= x.length - 1; i++,m++){
//     if(x[i]===0){
//         console.log(x[i])
        
//     }
//     if(x[m] === 1){
//         console.log(x[m]);
//     } 
   
// }
// }

// dnfalgorithm(); //calling the function


function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function separate(arr){
    let i = 0;
    let j = arr.length - 1;

    while(i <= j){
        // till the time i and j have not passed each other
        if (arr[i] == 1){ // we just check if we have  1 at index i, doest matter what we have at j
            swap(arr, i, j);
            j--; // include the new 1 we threw in the right window
        } else{
            i++;  // expand the left window directly
        }
    }
}

let arr = [1,1,1,0,1,0,0,0,1,0,1]; 

separate(arr); // transform our original array;

console.log(arr)

// [1, 1, 0, 1, 0]
//  i           j