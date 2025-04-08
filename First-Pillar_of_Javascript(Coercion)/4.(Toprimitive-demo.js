var obj = {

    toString(){

        // by default gives [object Object] 
        //  but we can override this method in order to provide 
        //  our own string representation of the object.
        
        return 'hello';
    }
};

console.log(typeof obj.toString());

// but the value of bydefault will return you the same object  


var Obj = {x: 10, valueOf() {return 10;}};
// it doest bydefalt return Object object just like in toString() 
console.log(obj.valueOf());