const buffet = ["Pizza", "Pasta", "Burger", "Fries"]; 

const server = buffet[Symbol.iterator]();

console.log(server.next());
console.log(server.next());
console.log(server.next());
console.log(server.next());
