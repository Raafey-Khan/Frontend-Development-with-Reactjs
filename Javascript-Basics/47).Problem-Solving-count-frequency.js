let str = "Raafay";

let freqMap = {};

for (let char of str){
    if (freqMap[char]){ 
        // if present only then execute
        freqMap[char] += 1 // if same value + 1
    }

    else {
        // all entries here if the same value is not present in car variable
        freqMap[char] = 1; // all 1 coming from here if the value is not reapeting go here get 1
    }
}


console.log(freqMap);