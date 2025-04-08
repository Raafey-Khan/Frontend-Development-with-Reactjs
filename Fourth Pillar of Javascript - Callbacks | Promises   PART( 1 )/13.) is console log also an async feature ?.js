// No It depends

// console.log is a web api provided by browser and runtime environment,

// if we are running on node, so console.log is provided by nodejs and its a nodejs feature technically

// its built on process.stdout.write and thats how we print things using console.log

// but in the proccess.stdout.write feature takes Strings and not numbers


// So if we are running from the file then console.log is synchronous

// and if we are running on TTYs(terminal) then its async on windows and synchronous on POSIX

// and if we are running from Pipes and Sockets then console.log is synchrounous

clearInterval();