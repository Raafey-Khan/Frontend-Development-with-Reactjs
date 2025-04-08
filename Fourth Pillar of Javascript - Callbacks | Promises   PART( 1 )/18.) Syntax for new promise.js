function f() {
    // Returning a value for demonstration purposes (an array)
    return ['hello', 'world', 'foo', 'bar'];
}

function archive() {
    return new Promise(function exec(resolve, reject) {
        setTimeout(function () {
            let n = f(); // Assuming f() returns an array or similar
            for (let i = 0; i < n.length; i++) {
                if (n[i] === 'bar') { // Replace with meaningful logic
                    resolve(i); // Resolve with the index or value
                    return; // Exit the loop once resolved
                }
            }
            // If we finish the loop without resolving
            reject('Value not found');
        }, 5000);
    });
}

archive().then(result => {
    console.log('Resolved with:', result);
}).catch(error => {
    console.log('Rejected with:', error);
});
