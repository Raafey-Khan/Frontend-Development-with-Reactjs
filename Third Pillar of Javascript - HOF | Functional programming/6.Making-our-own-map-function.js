
const newArr = [1,2, 3, 4, 5, 6]

function customMapper(arr, func){
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i))
    }

    return result;
}


const value = customMapper(newArr)