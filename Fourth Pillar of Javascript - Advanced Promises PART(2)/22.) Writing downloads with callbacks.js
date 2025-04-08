

function downloader(url, cb) {
    console.log("Starting downloading from", url);
    setTimeout(function down(){
        const content = "ABCD";
        cb(content)
    }, 4000)
}


function WriteFile(data, cb){
    console.log("Started writing", data, "on file");
    setTimeout(function write() {
        const filename = "file.txt";
        cb(filename);
    }, 5000)
}

function Uploader(url, file, cb){
    console.log("Started uploading", file, "on", url);
    setTimeout(function up(){
        console.log("Upload completed");
        const response = "Success";
        cb(response)
    }, 2000)
}

downloader("www.xyz.com", function processDownload(content){
      console.log("We are going to process the downloaded data");
      WriteFile(content, function processWriter(filename){
        console.log("We are downloaded and writtern the file, now will upload");
        Uploader("www.upload.com", filename, function processUpload(response){
            console.log("we had uploaded with", response);
        })
      })
})

