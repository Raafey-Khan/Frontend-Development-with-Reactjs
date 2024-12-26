function sleep(ms){
    return new Promise((res, rej) => {
        setTimeout(res, ms)
    })
}


async function process() {
    console.log('Hello!');

    await sleep(2000);
    console.log('Bye.');
}


console.log("Starting");

process();
console.log("Ending");