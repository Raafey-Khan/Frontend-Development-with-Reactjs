const player1 = {
    firstname: 'Virat',
    lastname: 'Kohli',
    numberToBat: 3,
    canBowl: false,
    getDetails: function(){
        console.log(this.firstname, this.lastname, "comes at No.", this.numberToBat);
    }
}


// const obj = function () {
//     console.log(this.getDetails());
// }

// let x = obj.bind(player1);
// x();


const obj = function(x, y) {
    console.log(x + y);;
    this.getDetails();
}

obj.call(player1, 2,45);
// what bind function actually do, it creates a new function