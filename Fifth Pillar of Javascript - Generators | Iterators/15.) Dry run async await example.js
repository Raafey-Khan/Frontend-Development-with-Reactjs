function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from 2", url); // line number 2
        setTimeout(function down() {
            console.log("Downloading completed 5"); // line no 5
            const content = "ABCDEF"; // assume dummy download content
            resolve(content); 
        }, 6000)
    })
}

function writeFile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing a file with 7", data); // line number 7
        setTimeout(function write() {
            console.log("Completed writing the data in a file 9"); // line no 9
            const filename = "file.txt";
            resolve(filename);
        }, 5000)
    })
}

function uploadData(file, url){
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading 11", file, "on", url); // line no 11
        setTimeout(function up() {
            console.log("upload completed 12"); // line no 12
            const response = "SUCCESS";
            resolve(response);
        },2000)
    })
}

async function steps() {
    console.log("starting steps 1"); // line number 1
    const downloadedData = await download("www.xyz.com")
    console.log("data downloaded is 6", downloadedData); // line no 6
    const fileWritten = await writeFile(downloadedData);
    console.log("file written is 10", fileWritten); // line no 10
    const uploadResponse = await uploadData(fileWritten, "www.drive.google.com");
    console.log("Upload response is 13", uploadResponse); // line no 13
    console.log("SUCCESS 14"); return uploadResponse ; // line no 14
}


steps().then((value) => console.log("we have completed steps with 15", value)); // calling the function line no 15
console.log("outside 3"); // line no 3

for(let i = 0; i < 10000000000; i++){ 

}

setTimeout(function f() {console.log("timer done 8")}, 4000); // line number 8
console.log("for loop donem 4"); // line no 4