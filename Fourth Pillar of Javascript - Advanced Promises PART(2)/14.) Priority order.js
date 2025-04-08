/*
Priority order in the macrotask queue and the microtask queue 
in the callstack from the eventloop


Anything still going in the callstack > it will be prioritise
along with the global code any global peice of code

Call Stack  > microtask > microtask
globalcode
*/