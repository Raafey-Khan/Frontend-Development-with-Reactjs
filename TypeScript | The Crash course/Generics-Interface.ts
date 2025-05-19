interface customInterface<T1, T2> {
    property: T1;
    moreProperty: T2;
    // in this way you can create your own customInterfaces
}


const obj: customInterface<string, number> = {
    property: "10",
    moreProperty: 30
}

console.log(obj);


// you can have generic type alias also