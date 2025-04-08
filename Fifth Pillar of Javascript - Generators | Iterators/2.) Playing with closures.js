function DO(task){ // local to DO is task
    setTimeout(function exec() {
        console.log(task);
    }, 2000)
}

DO();

console.log("end");

// so here DO will be made a stack frame entry in the call stack when its called

// but the setTimeout will go start a timer in the runtime
// and after done it will remember the (task) in the macrostask queue


// simple defination of closure