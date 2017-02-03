var fs = require("fs");
var readStream = fs.createReadStream("./1.mkv");
readStream.on("data",function(chunk){
    //这里的chunk是一个buffer的二进制数据流
    console.log(chunk);
});


