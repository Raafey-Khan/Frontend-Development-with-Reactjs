// clear


document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#display").value = " ";
})

// backSpace Function

const backSpace = () =>{
    const num = document.querySelector("#display").value.slice(0, -1);
    document.querySelector("#display").value = num;
}

// one function

const one = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = "1";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "1";
    }
}

// two function

const two = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = "2";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "2";
    }
}

// three function

const three = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = "3";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "3";
    }
}

// four function

const four = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = "4";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "4";
    }
}


// five function

const five = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = "5";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "5";
    }
}

// six function

const six = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = "6";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "6";
    }
}


// seven function

const seven = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = "7";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "7";
    }
}



// eight function

const eight = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = "8";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "8";
    }
}



// nine function

const nine = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = "9";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "9";
    }
}


// zero function

const zero = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector('#display').value = "0";
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + "0";
    }
}

