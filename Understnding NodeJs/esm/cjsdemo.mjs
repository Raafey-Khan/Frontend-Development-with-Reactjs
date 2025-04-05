export const linearSearch = function search(arr, x){
    for(let i =0; i < arr.length; i++){
        if(arr[i] == x) return i;
    }
    return undefined
}


export const binarySearch = function search(arr, x){
    let lo = 0; hi = arr.length - 1;
    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] == x) return mid;
        if(arr[mid] < x){
            lo = mid + 1;
        } else{
            hi = mid - 1;
        }
    }
    return undefined;
}

export const raafay = function bind(arr){ //named export
    console.log(`hello ${arr}`);
}

export default function mergesort(){ // default export
    console.log("merge me");
}


export default function anotherpain(){
    console.log("no pain");
}