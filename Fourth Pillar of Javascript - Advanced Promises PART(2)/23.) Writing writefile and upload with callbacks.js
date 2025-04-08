function downloader(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Entering in the downloader");
        setTimeout(function down() {
            console.log("Starting downloading data from", url);
            const content = "ABC";
            console.log("Downloaded data of", url, "is", content);
            resolve({ url, content });
        }, 5000);
    });
}

function WriteFile(data, filename) {
    return new Promise(function exec(resolve, reject) {
        setTimeout(function write() {
            console.log("Starting writing the", data, "to file");
            console.log("Written data", data, "to filename", filename);
            resolve({ data, filename });
        }, 10000);
    });
}

const p = downloader('xyz');

p.then(function fulfillhandler1(data) {
    console.log("Downloaded Data from", data.url, "is", data.content);
}, 
function rejectHandler2(value) {
    console.log("Rejected", value);
});

const f = WriteFile("Dummyraw", "file.txt");

f.then(function fulfillhandler2(result) {
    console.log("Written the data", result.data, "to the filename", result.filename);
}, 
function rejectHandler2(value) {
    console.log("Rejected", value);
});
