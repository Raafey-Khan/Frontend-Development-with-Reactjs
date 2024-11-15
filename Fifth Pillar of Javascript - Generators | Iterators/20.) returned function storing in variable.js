// store a returned function inside a variable 


function fun(){
    console.log("Im fun function");
    return function() {
        console.log("iam Returned function");
    }
}

const res = fun(); // when fun called inside the returned fun stored in res

res(); // to check see res is acting like a function 
// because inside the fun we returned a function

// i know it sounds crazy but heres how it is crazy concept

res(); // returned function stored inside res



function gun(){
    console.log('Iam gun function');
    return function rf(){
        return gun();
    }
}

const newres = gun();

newres();