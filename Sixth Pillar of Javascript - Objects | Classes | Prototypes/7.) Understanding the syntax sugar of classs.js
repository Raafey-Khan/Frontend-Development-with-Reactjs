class Grocerry{
    foodname;
    foodprice;
    discount;


    constructor(fn,fp, d){
        this.foodname = fn;
        this.foodprice = fp;
        this.discount = d;
        return; // <- whatever you can return but it should be non primitive and if you pass this then sameoutput this refers to the calling context that new brand creates an empty object 

    }
}



const objres = new Grocerry("Butter Cookies", "3000", "17%");

console.log(objres);