console.log("Hello world");

for (let i = 0; i < 3; i++) {
    setTimeout(function exec() {
        console.log("Timer Done");
    },0);    
}

for(let i = 0; i < 1000000000; i++) {
    //  some task // 10s
}
console.log("End");