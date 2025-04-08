function setCancellableTimeout(cb,ms){
   const timerid = setTimeout(cb, ms);

   return function cancel() {
    clearTimeout(timerid);
   }
}

let i = 0;

const cancel = setCancellableTimeout(() => {
    i++
}, 100);

cancel();
console.log(i);