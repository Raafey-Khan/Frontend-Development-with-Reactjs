// async is a synchronously function until it contains await keyword

// the moment we see await execution pauses and await resolves the promise

// Async await functions always returns a Promise or Resolved Promise
// Bydefaultly

// When async await functions are stored in the microtask queue after being
// resolved and then after the global or callstack empty then LIFO way
// come into the callstack and executes

// just like yeild where we left and we goes out from the function
// await is also like that goes out from the functions until the promise is being resolved