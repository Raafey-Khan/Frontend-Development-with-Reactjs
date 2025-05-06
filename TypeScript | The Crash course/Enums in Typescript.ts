// What are Enums Enumerations in Typescript



/*
AN Enumeration is a type that represents named contansts
is offen named as Enum

const INITIALISED = "initialised"

Ticket status ["initialised", "cancelled", "resolved", "pending"];

ti.status == 'resolved' || ti.status == 'rejected'
*/




enum TicketStatus {
    INITIALISED,
    CANCELLED,
    PENDING,
    CLOSED
}


const Ticket = {
    id: 1,
    titile: "new ticket",
    status: TicketStatus.INITIALISED
}

console.log(Ticket);

// compilled of enum in js will be an iffe

// enus containing raw strings containing 0 index values
 


// in simple terms


// Enum is special class 
// that is going to represents set of 
// constansts which are not going to change


// just create enums declare raw string constants
// and they will automaticaly mapped themselves into numericcs
// from 0 to the last numeric you created at



enum Status{
    ACCEPTED = 200,
    REJECTED = 404
}

console.log(Status.ACCEPTED);