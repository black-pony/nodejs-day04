var fs = require("fs");
var readStream = fs.createReadStream("./1.mkv");
var totalSize = fs.statSync("./1.mkv").size;//文件总的大小
var currentSize = 0;
readStream.on("data",function(chunk){
    // console.log(chunk.length);
    currentSize += chunk.length;
    // console.log(currentSize);
    // console.log("总的大小是:" + totalSize);
    // console.log("============");
    console.log("已读取了: " + (currentSize / totalSize) * 100 + "%");
});



