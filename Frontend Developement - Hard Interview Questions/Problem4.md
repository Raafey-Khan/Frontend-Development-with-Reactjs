How does prototypal inheritance operate in JavaScript,
and why is it frequent topic in interviews ?


Ans) In javascript, prototypal inheritance

is a core concept where objects inherit properties from other
objects. This is facilited by the __proto__ property, which is 
a reference to another object,
known as the object's prototype


Example Of prototypal inheritance

// Parent object constructor.

function Animal(name) {
    this.name = name;
}

// Add a method to the parent object's prototype.

Animal.prototype.makeSound = funcction () {
    console.log('The ' + this.constructor.name + ' makes a sound.')
}


// Child object constructor.
function Dog(name) {
    Animal.call(this, name) // Call the parent constructor
}


// Set this child object's prototype to be the parent's
prototype.

Object.setPrototypeOf(Dog.prototype, Animal.prototype);




// Add a method to the child object's prototype.

Dog.prototype.bark = function() {
    console.log('Woof!')
}


// Create a new instance of Dog.

const bolt = new Dog('Bolt');

// Call methods on the child object.

console.log(bolt.name);  // Outputs: "Bolt"
bolt.makeSound();  // Outputs: "The DOG makes a sound"
bolt.bark();  // Outputs: "Woof"




IN summary, protypal inheritance in JavaScript allows objects
to inherit properties and methods from other objeccts, creating a chain where properties are looke up as need. This differs from classical inhercance and is an essential concept in JavaScript programming